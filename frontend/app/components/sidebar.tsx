"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useLocale, type SerializedCategory } from "./locale-provider";
import { getIcon } from "./icon-map";

export function Sidebar() {
  const { lang, categories, t } = useLocale();
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const currentCategory = parts.length > 1 ? parts[1] : "";

  return (
    <aside className="hidden lg:flex flex-col w-[var(--sidebar-w)] h-screen sticky top-0 border-r border-border bg-bg-elevated overflow-y-auto">
      <Link
        href={`/${lang}`}
        className="flex items-center gap-2.5 px-5 py-4 border-b border-border hover:bg-bg-card transition-colors"
      >
        <Image src="/logo.png" alt="CCTools" width={28} height={28} />
        <div>
          <span className="font-heading font-bold text-[var(--text-md)] text-t1">
            CCTools
          </span>
          <span className="text-[var(--text-xs)] text-lime ml-1.5 font-medium">
            {t.docs}
          </span>
        </div>
      </Link>

      <nav className="flex-1 py-3 px-3">
        <Link
          href={`/${lang}`}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-[var(--radius-md)] text-[var(--text-sm)] transition-colors mb-1 ${
            pathname === `/${lang}`
              ? "bg-lime-dim text-lime"
              : "text-t2 hover:text-t1 hover:bg-bg-card"
          }`}
        >
          {t.home}
        </Link>

        {categories.map((cat) => (
          <SidebarCategory
            key={cat.slug}
            category={cat}
            isActive={currentCategory === cat.slug}
            pathname={pathname}
          />
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-border space-y-1">
        <a
          href="https://cctools.network"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 text-[var(--text-sm)] text-t2 hover:text-t1 hover:bg-bg-card rounded-[var(--radius-md)] transition-colors"
        >
          {t.openCCTools}
          <ExternalLink size={12} className="text-t3" />
        </a>
        <a
          href="https://x.com/cantontools"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3 py-2 text-[var(--text-sm)] text-t2 hover:text-t1 hover:bg-bg-card rounded-[var(--radius-md)] transition-colors"
        >
          {t.twitterX}
          <ExternalLink size={12} className="text-t3" />
        </a>
      </div>
    </aside>
  );
}

function SidebarCategory({
  category,
  isActive,
  pathname,
}: {
  category: SerializedCategory;
  isActive: boolean;
  pathname: string;
}) {
  const { lang } = useLocale();
  const [expanded, setExpanded] = useState(isActive);
  const Icon = getIcon(category.iconName);

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-[var(--radius-md)] text-[var(--text-sm)] transition-colors ${
          isActive
            ? "text-t1"
            : "text-t2 hover:text-t1 hover:bg-bg-card"
        }`}
      >
        <Icon
          size={15}
          style={{ color: isActive ? category.color : undefined }}
          className={isActive ? "" : "text-t3"}
        />
        <span className="flex-1 text-left font-medium">{category.title}</span>
        <ChevronDown
          size={14}
          className={`text-t3 transition-transform duration-200 ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {expanded && (
        <div className="ml-[22px] pl-3 border-l border-border mt-0.5 mb-2 space-y-0.5">
          {category.articles.map((article) => {
            const href = `/${lang}/${category.slug}/${article.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={article.slug}
                href={href}
                className={`block px-3 py-1.5 text-[var(--text-sm)] rounded-[var(--radius-sm)] transition-colors ${
                  active
                    ? "text-lime bg-lime-dim"
                    : "text-t3 hover:text-t2 hover:bg-bg-card"
                }`}
              >
                {article.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
