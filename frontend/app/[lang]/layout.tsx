import { notFound } from "next/navigation";
import { LOCALES, isValidLocale, type Locale } from "../lib/i18n";
import { getLocalizedCategories } from "../lib/i18n";
import { getUIStrings } from "../lib/ui-strings";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";
import { LocaleProvider, type SerializedCategory } from "../components/locale-provider";
import type { Metadata } from "next";

// Map icon component to string name for serialization
const ICON_NAMES: Record<string, string> = {
  BookOpen: "BookOpen",
  Wallet: "Wallet",
  Globe: "Globe",
  Zap: "Zap",
  Shield: "Shield",
  Trophy: "Trophy",
  Star: "Star",
  Settings: "Settings",
  HelpCircle: "HelpCircle",
  Users: "Users",
};

function getIconName(icon: { displayName?: string; name?: string }): string {
  // Lucide icons have displayName
  return icon.displayName || icon.name || "FileText";
}

type Props = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  const titles: Record<Locale, string> = {
    en: "CCTools Docs",
    es: "CCTools Docs",
    pt: "CCTools Docs",
    zh: "CCTools 文档",
  };

  const descriptions: Record<Locale, string> = {
    en: "Documentation, guides, and FAQs for CCTools — the leading multi-tool platform for Canton Network.",
    es: "Documentación, guías y preguntas frecuentes para CCTools — la plataforma líder de herramientas para Canton Network.",
    pt: "Documentação, guias e FAQs para CCTools — a principal plataforma de ferramentas para Canton Network.",
    zh: "CCTools的文档、指南和常见问题 — Canton Network领先的多功能工具平台。",
  };

  return {
    title: {
      default: titles[lang],
      template: `%s | ${titles[lang]}`,
    },
    description: descriptions[lang],
  };
}

export default async function LangLayout({ params, children }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const categories = getLocalizedCategories(lang);
  const t = getUIStrings(lang);

  // Serialize categories for client components (strip icon component, pass name)
  const serialized: SerializedCategory[] = categories.map((cat) => ({
    slug: cat.slug,
    title: cat.title,
    description: cat.description,
    iconName: getIconName(cat.icon as unknown as { displayName?: string; name?: string }),
    color: cat.color,
    colorDim: cat.colorDim,
    articles: cat.articles.map((a) => ({
      slug: a.slug,
      title: a.title,
      summary: a.summary,
      tags: a.tags,
      sections: a.sections.map((s) => ({
        heading: s.heading,
        body: s.body,
      })),
    })),
  }));

  return (
    <LocaleProvider lang={lang} categories={serialized} t={t}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </LocaleProvider>
  );
}
