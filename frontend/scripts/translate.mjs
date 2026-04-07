#!/usr/bin/env node

/**
 * Translate content.ts strings to target locales using Google Translate free API.
 * Caches translations in app/lib/translations/{locale}.json.
 * Only retranslates strings whose source text has changed.
 *
 * Usage: node scripts/translate.mjs
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TRANSLATIONS_DIR = path.join(ROOT, "app", "lib", "translations");
const CONTENT_FILE = path.join(ROOT, "app", "lib", "content.ts");

const LOCALES = ["es", "zh", "pt"];
const BATCH_SIZE = 30;
const DELAY_MS = 500; // rate limit protection

// ── Extract translatable strings from content.ts ──

function extractStrings() {
  const src = fs.readFileSync(CONTENT_FILE, "utf-8");
  const strings = new Map(); // key -> sourceText

  // Extract category-level strings
  const catTitleRe = /title:\s*"([^"]+)"/g;
  const catDescRe = /description:\s*"([^"]+)"/g;
  const summaryRe = /summary:\s*"([^"]+)"/g;
  const headingRe = /heading:\s*"([^"]+)"/g;

  // We need to parse the categories array more carefully
  // Strategy: extract all string literals that are content (not slugs, not colors, not tags)

  // Parse categories array
  const categoriesMatch = src.match(/export const categories: Category\[\] = \[([\s\S]*)\];/);
  if (!categoriesMatch) {
    console.error("Could not find categories array in content.ts");
    process.exit(1);
  }

  const content = categoriesMatch[1];

  // Extract all translatable fields
  const patterns = [
    { re: /(?:^|\n)\s*title:\s*"([^"]+)"/g, prefix: "title" },
    { re: /(?:^|\n)\s*description:\s*"([^"]+)"/g, prefix: "desc" },
    { re: /(?:^|\n)\s*summary:\s*"([^"]+)"/g, prefix: "summary" },
    { re: /(?:^|\n)\s*heading:\s*"([^"]+)"/g, prefix: "heading" },
  ];

  for (const { re, prefix } of patterns) {
    let m;
    while ((m = re.exec(content)) !== null) {
      const text = m[1];
      const key = `${prefix}:${hash(text)}`;
      strings.set(key, text);
    }
  }

  // Extract body strings (multiline template literals or regular strings)
  const bodyRe = /body:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = bodyRe.exec(content)) !== null) {
    const text = m[1].replace(/\\n/g, "\n").replace(/\\"/g, '"');
    const key = `body:${hash(text)}`;
    strings.set(key, text);
  }

  console.log(`Extracted ${strings.size} translatable strings`);
  return strings;
}

function hash(text) {
  return crypto.createHash("md5").update(text).digest("hex").slice(0, 12);
}

// ── Google Translate free API ──

async function translateText(text, targetLang) {
  // Preserve markdown formatting tokens
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", targetLang === "zh" ? "zh-CN" : targetLang);
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const res = await fetch(url.toString(), {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  });

  if (!res.ok) {
    throw new Error(`Google Translate API error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  // data[0] is array of [translatedSegment, originalSegment, ...]
  let translated = "";
  if (Array.isArray(data[0])) {
    for (const segment of data[0]) {
      if (segment[0]) translated += segment[0];
    }
  }

  return translated;
}

async function translateBatch(entries, targetLang) {
  const results = [];

  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    console.log(`  Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(entries.length / BATCH_SIZE)} (${batch.length} strings)`);

    for (const [key, text] of batch) {
      try {
        const translated = await translateText(text, targetLang);
        results.push([key, translated]);
      } catch (err) {
        console.error(`  Error translating key ${key}: ${err.message}`);
        results.push([key, text]); // fallback to original
      }
    }

    // Rate limit
    if (i + BATCH_SIZE < entries.length) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  return results;
}

// ── Cache management ──

function loadCache(locale) {
  const file = path.join(TRANSLATIONS_DIR, `${locale}.json`);
  if (fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  }
  return { _meta: { locale, updatedAt: null }, strings: {} };
}

function saveCache(locale, cache) {
  cache._meta.updatedAt = new Date().toISOString();
  fs.mkdirSync(TRANSLATIONS_DIR, { recursive: true });
  const file = path.join(TRANSLATIONS_DIR, `${locale}.json`);
  fs.writeFileSync(file, JSON.stringify(cache, null, 2), "utf-8");
}

// ── Main ──

async function main() {
  console.log("=== CCTools Docs Translation ===\n");

  const strings = extractStrings();
  const sourceEntries = [...strings.entries()];

  for (const locale of LOCALES) {
    console.log(`\n── Translating to ${locale.toUpperCase()} ──`);

    const cache = loadCache(locale);

    // Find strings that need translation (new or changed source)
    const toTranslate = sourceEntries.filter(([key, text]) => {
      const cached = cache.strings[key];
      if (!cached) return true;
      // Check if source text changed
      return cached._src !== text;
    });

    // Remove stale keys
    const currentKeys = new Set(sourceEntries.map(([k]) => k));
    for (const key of Object.keys(cache.strings)) {
      if (!currentKeys.has(key)) {
        delete cache.strings[key];
      }
    }

    if (toTranslate.length === 0) {
      console.log(`  All ${sourceEntries.length} strings cached, nothing to translate.`);
      saveCache(locale, cache);
      continue;
    }

    console.log(`  ${toTranslate.length} strings need translation (${sourceEntries.length - toTranslate.length} cached)`);

    const translated = await translateBatch(toTranslate, locale);

    for (const [key, translatedText] of translated) {
      cache.strings[key] = {
        _src: strings.get(key),
        text: translatedText,
      };
    }

    saveCache(locale, cache);
    console.log(`  Saved ${Object.keys(cache.strings).length} translations to translations/${locale}.json`);
  }

  console.log("\n=== Done! ===");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
