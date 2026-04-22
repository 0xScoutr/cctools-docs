import { ImageResponse } from "next/og";
import { categories } from "../../../lib/content";

// Static export target — OG routes must be fully static.
export const dynamic = "force-static";
import {
  getLocalizedArticle,
  LOCALES,
  isValidLocale,
  type Locale,
} from "../../../lib/i18n";

// Per-article OG card. Pulls the localized title + category name so social
// previews say exactly what the reader will land on. Falls back to a generic
// "CC Tools Docs" card if the slug pair doesn't resolve.

export const alt = "CC Tools Docs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

export default async function OG({ params }: Props) {
  const { lang, category, slug } = await params;
  const locale: Locale = isValidLocale(lang) ? lang : "en";
  const res = getLocalizedArticle(locale, category, slug);

  const title = res?.article.title ?? "CC Tools Docs";
  const catTitle = res?.category.title ?? "Documentation";
  const catColor = res?.category.color?.includes("var(") ? "#bef264" : res?.category.color ?? "#bef264";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "radial-gradient(ellipse at 85% 110%, rgba(190,242,100,0.14) 0%, transparent 55%), #0c0e14",
          color: "#e8eaf0",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        {/* brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#bef264",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0c0e14",
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: -1,
              }}
            >
              C
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 22, fontWeight: 700 }}>CC Tools Docs</div>
              <div style={{ fontSize: 16, color: "#6b7387" }}>
                docs.cctools.network
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 18px",
              background: "rgba(190,242,100,0.12)",
              border: "1px solid rgba(190,242,100,0.3)",
              borderRadius: 999,
              color: catColor,
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: catColor,
              }}
            />
            {catTitle}
          </div>
        </div>

        {/* title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 1040,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#6b7387",
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          <span>Read the guide →</span>
          <span style={{ color: "#bef264" }}>canton network</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
