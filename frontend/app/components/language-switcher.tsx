"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { LOCALES, LOCALE_LABELS, LOCALE_FLAGS, type Locale } from "../lib/i18n-shared";

export function LanguageSwitcher({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 bg-bg-card border border-border hover:border-border-hover rounded-[var(--radius-md)] transition-all text-[var(--text-sm)] text-t2 hover:text-t1"
      >
        <span className="text-base leading-none">{LOCALE_FLAGS[lang]}</span>
        <span className="hidden sm:inline">{LOCALE_LABELS[lang]}</span>
        <ChevronDown
          size={12}
          className={`text-t3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-[160px] bg-bg-elevated border border-border rounded-[var(--radius-md)] shadow-xl animate-scale-in overflow-hidden z-50">
          {LOCALES.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-[var(--text-sm)] transition-colors ${
                locale === lang
                  ? "bg-lime-dim text-lime"
                  : "text-t2 hover:text-t1 hover:bg-bg-card"
              }`}
            >
              <span className="text-base leading-none">{LOCALE_FLAGS[locale]}</span>
              {LOCALE_LABELS[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
