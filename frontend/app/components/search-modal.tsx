"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X, ArrowRight, FileText } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLocale, type SerializedCategory } from "./locale-provider";

function searchInCategories(
  categories: SerializedCategory[],
  query: string
): Array<{
  category: SerializedCategory;
  article: SerializedCategory["articles"][number];
  matchedSection?: string;
}> {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: Array<{
    category: SerializedCategory;
    article: SerializedCategory["articles"][number];
    matchedSection?: string;
  }> = [];

  for (const category of categories) {
    for (const article of category.articles) {
      const titleMatch = article.title.toLowerCase().includes(q);
      const summaryMatch = article.summary.toLowerCase().includes(q);
      const tagMatch = article.tags.some((t) => t.includes(q));

      if (titleMatch || summaryMatch || tagMatch) {
        results.push({ category, article });
        continue;
      }

      for (const section of article.sections) {
        if (
          section.heading.toLowerCase().includes(q) ||
          section.body.toLowerCase().includes(q)
        ) {
          results.push({ category, article, matchedSection: section.heading });
          break;
        }
      }
    }
  }

  return results;
}

export function SearchTrigger({
  variant = "header",
}: {
  variant?: "header" | "hero";
}) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (variant === "hero") {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="w-full max-w-[520px] flex items-center gap-3 px-5 py-3.5 bg-bg-card border border-border hover:border-border-hover rounded-[var(--radius-lg)] transition-all group cursor-text"
        >
          <Search size={18} className="text-t3 group-hover:text-t2 transition-colors" />
          <span className="flex-1 text-left text-t3 text-[var(--text-md)]">
            {t.searchPlaceholder}
          </span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 bg-bg-surface border border-border rounded text-[var(--text-xs)] text-t3 font-mono">
            Ctrl K
          </kbd>
        </button>
        {open && <SearchModalInline onClose={() => setOpen(false)} />}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 bg-bg-card border border-border hover:border-border-hover rounded-[var(--radius-md)] transition-all text-[var(--text-sm)] text-t3 hover:text-t2"
      >
        <Search size={14} />
        <span className="hidden md:inline">Search</span>
        <kbd className="hidden md:inline-flex px-1.5 py-0.5 bg-bg-surface border border-border rounded text-[10px] font-mono ml-2">
          Ctrl K
        </kbd>
      </button>
      {open && <SearchModalInline onClose={() => setOpen(false)} />}
    </>
  );
}

function SearchModalInline({ onClose }: { onClose: () => void }) {
  const { lang, categories, t } = useLocale();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = searchInCategories(categories, query);

  useEffect(() => {
    inputRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  function navigate(categorySlug: string, articleSlug: string) {
    router.push(`/${lang}/${categorySlug}/${articleSlug}`);
    onClose();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      const r = results[selectedIndex];
      navigate(r.category.slug, r.article.slug);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-bg-overlay backdrop-blur-sm" />
      <div
        className="relative w-full max-w-[560px] mx-4 bg-bg-elevated border border-border rounded-[var(--radius-lg)] shadow-2xl animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
          <Search size={18} className="text-t3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t.searchPlaceholder}
            className="flex-1 bg-transparent text-t1 text-[var(--text-md)] placeholder:text-t3 outline-none font-body"
          />
          <button onClick={onClose} className="text-t3 hover:text-t2 transition-colors">
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[360px] overflow-y-auto py-2">
          {query && results.length === 0 && (
            <div className="px-5 py-8 text-center text-t3 text-[var(--text-sm)]">
              {t.searchNoResults} &ldquo;{query}&rdquo;
            </div>
          )}
          {!query && (
            <div className="px-5 py-8 text-center text-t3 text-[var(--text-sm)]">
              {t.searchHint}
            </div>
          )}
          {results.map((result, i) => (
            <button
              key={`${result.category.slug}-${result.article.slug}`}
              onClick={() => navigate(result.category.slug, result.article.slug)}
              className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                i === selectedIndex ? "bg-bg-card" : "hover:bg-bg-card"
              }`}
            >
              <div
                className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center shrink-0"
                style={{ background: result.category.colorDim, color: result.category.color }}
              >
                <FileText size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-t1 text-[var(--text-sm)] font-medium truncate">
                  {result.article.title}
                </div>
                <div className="text-t3 text-[var(--text-xs)] truncate">
                  {result.category.title}
                  {result.matchedSection && ` / ${result.matchedSection}`}
                </div>
              </div>
              <ArrowRight
                size={14}
                className={`text-t4 shrink-0 transition-colors ${
                  i === selectedIndex ? "text-t2" : ""
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 px-5 py-3 border-t border-border text-[var(--text-xs)] text-t3">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-bg-card border border-border rounded text-[10px] font-mono">↑↓</kbd>
            {t.searchNavigate}
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-bg-card border border-border rounded text-[10px] font-mono">↵</kbd>
            {t.searchOpen}
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-bg-card border border-border rounded text-[10px] font-mono">esc</kbd>
            {t.searchClose}
          </span>
        </div>
      </div>
    </div>
  );
}
