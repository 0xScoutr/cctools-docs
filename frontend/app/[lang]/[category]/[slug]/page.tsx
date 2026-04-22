import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { categories } from "../../../lib/content";
import {
  getLocalizedArticle,
  getLocalizedCategories,
  LOCALES,
  type Locale,
} from "../../../lib/i18n";
import { getUIStrings } from "../../../lib/ui-strings";
import {
  ArticleRenderer,
  TableOfContents,
} from "../../../components/article-renderer";
import type { Metadata } from "next";

const SITE_URL = "https://docs.cctools.network";

type Props = {
  params: Promise<{ lang: string; category: string; slug: string }>;
};

export async function generateStaticParams() {
  return LOCALES.flatMap((lang) =>
    categories.flatMap((c) =>
      c.articles.map((a) => ({ lang, category: c.slug, slug: a.slug })),
    ),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, category: catSlug, slug } = await params;
  const result = getLocalizedArticle(lang as Locale, catSlug, slug);
  if (!result) return {};

  const title = `${result.article.title} — ${result.category.title}`;
  const path = `/${catSlug}/${slug}`;

  return {
    title: result.article.title,
    description: result.article.summary,
    keywords: result.article.tags,
    alternates: {
      canonical: `${SITE_URL}/${lang}${path}`,
      languages: Object.fromEntries(
        (["x-default" as const, ...LOCALES] as const).map((k) => [
          k,
          `${SITE_URL}/${k === "x-default" ? "en" : k}${path}`,
        ]),
      ),
    },
    openGraph: {
      type: "article",
      title,
      description: result.article.summary,
      url: `${SITE_URL}/${lang}${path}`,
      siteName: "CC Tools Docs",
      tags: result.article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: result.article.summary,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { lang, category: catSlug, slug } = await params;
  const locale = lang as Locale;
  const result = getLocalizedArticle(locale, catSlug, slug);
  if (!result) notFound();

  const { category, article } = result;
  const t = getUIStrings(locale);
  const allCategories = getLocalizedCategories(locale);

  // Find prev/next articles
  const catArticles = category.articles;
  const currentIndex = catArticles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? catArticles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex < catArticles.length - 1
      ? catArticles[currentIndex + 1]
      : null;

  const catIndex = allCategories.findIndex((c) => c.slug === catSlug);
  const nextCategory =
    !nextArticle && catIndex < allCategories.length - 1
      ? allCategories[catIndex + 1]
      : null;

  // Structured data: TechArticle + BreadcrumbList. TechArticle is more
  // specific than Article for docs content; Google uses it as a stronger
  // signal that this is reference/how-to material.
  const articleUrl = `${SITE_URL}/${locale}/${catSlug}/${slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    inLanguage: locale,
    keywords: article.tags.join(", "),
    articleSection: category.title,
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    image: `${articleUrl}/opengraph-image`,
    author: {
      "@type": "Organization",
      name: "CC Tools",
      url: "https://cctools.network",
    },
    publisher: {
      "@type": "Organization",
      name: "CC Tools",
      url: "https://cctools.network",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Docs",
        item: `${SITE_URL}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `${SITE_URL}/${locale}/${catSlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <div className="max-w-[960px] mx-auto px-6 py-10 animate-fade-in">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="flex gap-10">
        <article className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[var(--text-sm)] text-t3 mb-6">
            <Link
              href={`/${locale}/${category.slug}`}
              className="hover:text-t2 transition-colors flex items-center gap-1.5"
              style={{ color: category.color }}
            >
              <category.icon size={14} />
              {category.title}
            </Link>
          </div>

          <h1 className="font-heading font-bold text-[var(--text-2xl)] text-t1 mb-2">
            {article.title}
          </h1>
          <p className="text-t2 text-[var(--text-md)] mb-8">
            {article.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-bg-surface border border-border rounded-[var(--radius-pill)] text-[var(--text-xs)] text-t3"
              >
                {tag}
              </span>
            ))}
          </div>

          <ArticleRenderer sections={article.sections} />

          {/* Navigation */}
          <div className="flex items-stretch gap-3 mt-12 pt-8 border-t border-border">
            {prevArticle ? (
              <Link
                href={`/${locale}/${category.slug}/${prevArticle.slug}`}
                className="flex-1 group flex flex-col items-start p-4 bg-bg-card border border-border rounded-[var(--radius-card)] hover:border-border-hover hover:bg-bg-card-hover transition-all"
              >
                <span className="text-[var(--text-xs)] text-t3 flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} />
                  {t.previous}
                </span>
                <span className="font-heading font-semibold text-[var(--text-sm)] text-t1 group-hover:text-lime transition-colors">
                  {prevArticle.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextArticle ? (
              <Link
                href={`/${locale}/${category.slug}/${nextArticle.slug}`}
                className="flex-1 group flex flex-col items-end p-4 bg-bg-card border border-border rounded-[var(--radius-card)] hover:border-border-hover hover:bg-bg-card-hover transition-all text-right"
              >
                <span className="text-[var(--text-xs)] text-t3 flex items-center gap-1 mb-1">
                  {t.next}
                  <ArrowRight size={12} />
                </span>
                <span className="font-heading font-semibold text-[var(--text-sm)] text-t1 group-hover:text-lime transition-colors">
                  {nextArticle.title}
                </span>
              </Link>
            ) : nextCategory ? (
              <Link
                href={`/${locale}/${nextCategory.slug}`}
                className="flex-1 group flex flex-col items-end p-4 bg-bg-card border border-border rounded-[var(--radius-card)] hover:border-border-hover hover:bg-bg-card-hover transition-all text-right"
              >
                <span className="text-[var(--text-xs)] text-t3 flex items-center gap-1 mb-1">
                  {t.nextSection}
                  <ArrowRight size={12} />
                </span>
                <span className="font-heading font-semibold text-[var(--text-sm)] text-t1 group-hover:text-lime transition-colors">
                  {nextCategory.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </article>

        <TableOfContents sections={article.sections} label={t.onThisPage} />
      </div>
    </div>
  );
}
