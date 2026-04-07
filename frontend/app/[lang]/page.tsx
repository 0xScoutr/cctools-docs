import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { getLocalizedCategories, getTotalArticles, type Locale } from "../lib/i18n";
import { getUIStrings } from "../lib/ui-strings";
import { SearchTrigger } from "../components/search-modal";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const locale = lang as Locale;
  const categories = getLocalizedCategories(locale);
  const totalArticles = getTotalArticles();
  const t = getUIStrings(locale);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative px-6 py-16 md:py-24 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-dim border border-border-lime rounded-[var(--radius-pill)] text-[var(--text-xs)] text-lime font-heading font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-lime rounded-full" />
            {totalArticles} {t.articlesAvailable}
          </div>

          <h1 className="font-heading font-bold text-[var(--text-hero)] text-t1 leading-[1.15] mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-t2 text-[var(--text-lg)] mb-8 max-w-[480px] mx-auto">
            {t.heroSubtitle}
          </p>

          <div className="flex justify-center">
            <SearchTrigger variant="hero" />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="px-6 pb-16 max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.slug}
                href={`/${locale}/${cat.slug}`}
                className="group flex items-start gap-4 p-5 bg-bg-card border border-border rounded-[var(--radius-card)] hover:border-border-hover hover:bg-bg-card-hover transition-all"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: cat.colorDim, color: cat.color }}
                >
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h2 className="font-heading font-bold text-[var(--text-md)] text-t1 group-hover:text-lime transition-colors">
                      {cat.title}
                    </h2>
                    <ArrowRight
                      size={14}
                      className="text-t4 group-hover:text-t2 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                  <p className="text-t3 text-[var(--text-sm)] mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                  <span className="text-[var(--text-xs)] text-t4 mt-2 inline-block">
                    {cat.articles.length}{" "}
                    {cat.articles.length === 1 ? t.article : t.articles}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-16 max-w-[900px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-bg-card border border-border rounded-[var(--radius-card)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[var(--radius-md)] bg-lime-dim flex items-center justify-center">
              <Mail size={18} className="text-lime" />
            </div>
            <div>
              <p className="font-heading font-bold text-[var(--text-md)] text-t1">
                {t.cantFind}
              </p>
              <p className="text-t3 text-[var(--text-sm)]">
                {t.cantFindSub}
              </p>
            </div>
          </div>
          <a
            href="https://www.cctools.network/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-lime text-navy font-heading font-bold text-[var(--text-sm)] rounded-[var(--radius-pill)] hover:bg-lime-hover transition-colors whitespace-nowrap"
          >
            {t.contactSupport}
            <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
