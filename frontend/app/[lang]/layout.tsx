import { notFound } from "next/navigation";
import { LOCALES, isValidLocale, type Locale } from "../lib/i18n";
import { getLocalizedCategories } from "../lib/i18n";
import { getUIStrings } from "../lib/ui-strings";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";
import {
  LocaleProvider,
  type SerializedCategory,
} from "../components/locale-provider";
import type { Metadata } from "next";

// Lucide displayName registry. Keep this in sync with content.ts — any new
// icon imported in content.ts must also be listed here so the sidebar can
// render it on the client.
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
  Newspaper: "Newspaper",
  GraduationCap: "GraduationCap",
};

function getIconName(icon: {
  displayName?: string;
  name?: string;
}): string {
  return ICON_NAMES[icon.displayName ?? ""] ?? icon.displayName ?? icon.name ?? "FileText";
}

type Props = {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
};

export async function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const SITE_URL = "https://docs.cctools.network";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) return {};

  const titles: Record<Locale, string> = {
    en: "CC Tools Docs — Canton Network Toolkit Guides",
    es: "CC Tools Docs — Guías del kit de herramientas de Canton Network",
    pt: "CC Tools Docs — Guias do kit de ferramentas da Canton Network",
    zh: "CC Tools 文档 — Canton Network 工具箱指南",
  };

  const descriptions: Record<Locale, string> = {
    en: "Official documentation for CC Tools — the community toolkit for Canton Network. Guides and FAQs for portfolio tracking, ecosystem discovery, rewards, governance, academy, and more.",
    es: "Documentación oficial de CC Tools — el kit de herramientas comunitario de Canton Network. Guías y preguntas frecuentes sobre portafolio, ecosistema, recompensas, gobernanza, academia y más.",
    pt: "Documentação oficial da CC Tools — o kit de ferramentas comunitário da Canton Network. Guias e FAQs sobre portfólio, ecossistema, recompensas, governança, academia e mais.",
    zh: "CC Tools 官方文档 — Canton Network 社区工具箱。投资组合跟踪、生态系统发现、奖励、治理、学院等完整指南与常见问题解答。",
  };

  const ogLocale: Record<Locale, string> = {
    en: "en_US",
    es: "es_ES",
    pt: "pt_BR",
    zh: "zh_CN",
  };

  return {
    title: { default: titles[lang], template: `%s | CC Tools Docs` },
    description: descriptions[lang],
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        "x-default": `${SITE_URL}/en`,
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        pt: `${SITE_URL}/pt`,
        zh: `${SITE_URL}/zh`,
      },
    },
    openGraph: {
      type: "website",
      title: titles[lang],
      description: descriptions[lang],
      url: `${SITE_URL}/${lang}`,
      locale: ogLocale[lang],
      siteName: "CC Tools Docs",
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "CC Tools Docs — Canton Network Toolkit",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[lang],
      description: descriptions[lang],
      site: "@cantontools",
      creator: "@cantontools",
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}

export default async function LangLayout({ params, children }: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const categories = getLocalizedCategories(lang);
  const t = getUIStrings(lang);

  const serialized: SerializedCategory[] = categories.map((cat) => ({
    slug: cat.slug,
    title: cat.title,
    description: cat.description,
    iconName: getIconName(
      cat.icon as unknown as { displayName?: string; name?: string },
    ),
    color: cat.color,
    colorDim: cat.colorDim,
    articles: cat.articles.map((a) => ({
      slug: a.slug,
      title: a.title,
      summary: a.summary,
      tags: a.tags,
      sections: a.sections.map((s) => ({ heading: s.heading, body: s.body })),
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
