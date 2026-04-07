"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ExternalLink, ChevronRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SearchTrigger } from "./search-modal";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale, type SerializedCategory } from "./locale-provider";
import { getIcon } from "./icon-map";

export function Header() {
  const { lang, categories, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 h-[var(--header-h)] flex items-center justify-between px-4 md:px-6 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-t2 hover:text-t1 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link href={`/${lang}`} className="flex items-center gap-2 lg:hidden">
            <Image src="/logo.png" alt="CCTools" width={24} height={24} />
            <span className="font-heading font-bold text-[var(--text-sm)] text-t1">
              CCTools
            </span>
            <span className="text-[var(--text-xs)] text-lime font-medium">
              {t.docs}
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4 flex-1">
          <Breadcrumb pathname={pathname} categories={categories} />
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher lang={lang} />
          <SearchTrigger variant="header" />
          <a
            href="https://cctools.network"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 bg-lime text-navy font-heading font-bold text-[var(--text-sm)] rounded-[var(--radius-pill)] hover:bg-lime-hover transition-colors"
          >
            {t.openApp}
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-bg-overlay"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="relative w-[280px] h-full bg-bg-elevated border-r border-border overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <Link
                href={`/${lang}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <Image src="/logo.png" alt="CCTools" width={24} height={24} />
                <span className="font-heading font-bold text-t1">CCTools</span>
                <span className="text-[var(--text-xs)] text-lime font-medium">
                  {t.docs}
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-t3 hover:text-t1"
              >
                <X size={18} />
              </button>
            </div>
            <div className="py-3 px-3">
              <Link
                href={`/${lang}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-[var(--radius-md)] text-[var(--text-sm)] transition-colors mb-2 ${
                  pathname === `/${lang}`
                    ? "bg-lime-dim text-lime"
                    : "text-t2 hover:text-t1 hover:bg-bg-card"
                }`}
              >
                {t.home}
              </Link>
              {categories.map((cat) => {
                const Icon = getIcon(cat.iconName);
                const isActive = pathname.startsWith(`/${lang}/${cat.slug}`);
                return (
                  <div key={cat.slug} className="mb-1">
                    <Link
                      href={`/${lang}/${cat.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-[var(--radius-md)] text-[var(--text-sm)] transition-colors ${
                        isActive
                          ? "text-t1 bg-bg-card"
                          : "text-t2 hover:text-t1 hover:bg-bg-card"
                      }`}
                    >
                      <Icon
                        size={15}
                        style={{ color: isActive ? cat.color : undefined }}
                        className={isActive ? "" : "text-t3"}
                      />
                      {cat.title}
                    </Link>
                    {isActive && (
                      <div className="ml-[22px] pl-3 border-l border-border mt-0.5 mb-1">
                        {cat.articles.map((a) => (
                          <Link
                            key={a.slug}
                            href={`/${lang}/${cat.slug}/${a.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className={`block px-3 py-1.5 text-[var(--text-sm)] rounded-[var(--radius-sm)] transition-colors ${
                              pathname === `/${lang}/${cat.slug}/${a.slug}`
                                ? "text-lime"
                                : "text-t3 hover:text-t2"
                            }`}
                          >
                            {a.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function Breadcrumb({
  pathname,
  categories,
}: {
  pathname: string;
  categories: SerializedCategory[];
}) {
  const { lang, t } = useLocale();
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length <= 1) return null;

  const category = categories.find((c) => c.slug === parts[1]);
  if (!category) return null;

  const article = parts[2]
    ? category.articles.find((a) => a.slug === parts[2])
    : null;

  return (
    <div className="flex items-center gap-1.5 text-[var(--text-sm)] text-t3">
      <Link href={`/${lang}`} className="hover:text-t2 transition-colors">
        {t.docs}
      </Link>
      <ChevronRight size={12} />
      <Link
        href={`/${lang}/${category.slug}`}
        className={`hover:text-t2 transition-colors ${!article ? "text-t1" : ""}`}
      >
        {category.title}
      </Link>
      {article && (
        <>
          <ChevronRight size={12} />
          <span className="text-t1 truncate max-w-[200px]">
            {article.title}
          </span>
        </>
      )}
    </div>
  );
}
