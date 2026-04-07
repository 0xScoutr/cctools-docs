import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { categories } from "../../lib/content";
import { getLocalizedCategory, LOCALES, type Locale } from "../../lib/i18n";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ lang: string; category: string }>;
};

export async function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    categories.map((c) => ({ lang, category: c.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category: slug } = await params;
  const category = getLocalizedCategory(lang as Locale, slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { lang, category: slug } = await params;
  const locale = lang as Locale;
  const category = getLocalizedCategory(locale, slug);
  if (!category) notFound();

  const Icon = category.icon;

  return (
    <div className="max-w-[720px] mx-auto px-6 py-10 animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center"
          style={{ background: category.colorDim, color: category.color }}
        >
          <Icon size={18} />
        </div>
        <h1 className="font-heading font-bold text-[var(--text-2xl)] text-t1">
          {category.title}
        </h1>
      </div>
      <p className="text-t2 text-[var(--text-md)] mb-8 ml-[52px]">
        {category.description}
      </p>

      <div className="space-y-2">
        {category.articles.map((article, i) => (
          <Link
            key={article.slug}
            href={`/${locale}/${category.slug}/${article.slug}`}
            className="group flex items-start gap-3.5 p-4 bg-bg-card border border-border rounded-[var(--radius-card)] hover:border-border-hover hover:bg-bg-card-hover transition-all"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div
              className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: category.colorDim, color: category.color }}
            >
              <FileText size={14} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-heading font-semibold text-[var(--text-md)] text-t1 group-hover:text-lime transition-colors">
                {article.title}
              </h2>
              <p className="text-t3 text-[var(--text-sm)] mt-0.5 line-clamp-2">
                {article.summary}
              </p>
            </div>
            <ArrowRight
              size={14}
              className="text-t4 group-hover:text-t2 group-hover:translate-x-0.5 transition-all mt-2 shrink-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
