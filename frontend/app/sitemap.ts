import type { MetadataRoute } from "next";
import { categories } from "./lib/content";
import { LOCALES, type Locale } from "./lib/i18n";

// Static export target — sitemap must be fully static.
export const dynamic = "force-static";

const SITE = "https://docs.cctools.network";

/**
 * Sitemap generator.
 *
 *   · One URL per (locale, page) so every translated page is discoverable
 *   · Each URL declares hreflang alternates so Google knows they're the
 *     same page in different languages (avoids duplicate-content penalties)
 *   · Priority stair-steps: home > category > article
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Helper: build a hreflang map covering every supported locale at the
  // given path suffix (e.g. "/getting-started/what-is-cctools").
  const languagesFor = (suffix: string): Record<string, string> => {
    const out: Record<string, string> = {};
    out["x-default"] = `${SITE}/en${suffix}`;
    for (const loc of LOCALES) {
      out[loc] = `${SITE}/${loc}${suffix}`;
    }
    return out;
  };

  // Root redirect → /en — canonical entry points to /en.
  entries.push({
    url: `${SITE}/en`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages: languagesFor("") },
  });

  // Per-locale locale index (already covered above for en, add for others).
  for (const loc of LOCALES as readonly Locale[]) {
    if (loc === "en") continue;
    entries.push({
      url: `${SITE}/${loc}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: languagesFor("") },
    });
  }

  // Categories and articles across every locale.
  for (const cat of categories) {
    const catSuffix = `/${cat.slug}`;
    for (const loc of LOCALES as readonly Locale[]) {
      entries.push({
        url: `${SITE}/${loc}${catSuffix}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: { languages: languagesFor(catSuffix) },
      });
    }

    for (const art of cat.articles) {
      const artSuffix = `/${cat.slug}/${art.slug}`;
      for (const loc of LOCALES as readonly Locale[]) {
        entries.push({
          url: `${SITE}/${loc}${artSuffix}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: { languages: languagesFor(artSuffix) },
        });
      }
    }
  }

  return entries;
}
