import type { Metadata } from "next";
import Script from "next/script";

const OPENAPI_URL = "https://api.cctools.network/api/v1/openapi.json";

export const metadata: Metadata = {
  title: "API Reference",
  description:
    "Read-only HTTP access to the CCTools ecosystem: projects, users, earn opportunities, leaderboard. Authenticated via X-Api-Key (apply at cctools.network/profile/api).",
  alternates: { canonical: "https://docs.cctools.network/api" },
  openGraph: {
    title: "CCTools API Reference",
    description:
      "Read-only API access for builders, validators and partners. Get an API key at cctools.network/profile/api.",
    url: "https://docs.cctools.network/api",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCTools API Reference",
    description:
      "Read-only API access for builders, validators and partners.",
  },
};

/**
 * /api: public API reference rendered by Scalar (loaded from jsDelivr).
 *
 * Scalar owns the entire viewport: sidebar (operations grouped by tag),
 * try-it-out pane, schema preview. Our chrome stays out of the way so
 * the visitor isn't reading two intros stacked. A minimal breadcrumb
 * keeps brand presence without duplicating the spec's own description.
 *
 * Out-of-localized tree because the spec content is English-only. Bump
 * the customCss section when you tweak brand colors.
 */
const CUSTOM_CSS = `
  /* Scalar brand overlay — match cctools dark + lime accents. The kepler
     theme variables are scoped via .scalar-app and friends. */
  :root {
    --scalar-color-1: #f3f4f6;
    --scalar-color-2: #b8bcc8;
    --scalar-color-3: #6f7488;
    --scalar-color-accent: #e6ff6a;
    --scalar-background-1: #0c0e14;
    --scalar-background-2: #11131c;
    --scalar-background-3: #161927;
    --scalar-background-accent: rgba(230, 255, 106, 0.08);
    --scalar-border-color: #232739;
    --scalar-button-1: #e6ff6a;
    --scalar-button-1-color: #0c0e14;
    --scalar-button-1-hover: #d4f050;
    --scalar-link-color: #e6ff6a;
    --scalar-link-color-hover: #d4f050;
  }
  .scalar-app, .scalar-api-reference {
    font-family: "Inter", system-ui, sans-serif;
  }
  .scalar-app h1, .scalar-app h2, .scalar-app h3 {
    font-family: "Manrope", system-ui, sans-serif;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .scalar-app code, .scalar-app pre {
    font-family: "JetBrains Mono", ui-monospace, monospace;
  }
`.trim();

export default function ApiDocsPage() {
  return (
    <>
      {/* Slim breadcrumb so the docs visitor knows where they are.
          Keeps brand presence without duplicating Scalar's own intro. */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-bg"
        style={{ position: "sticky", top: 0, zIndex: 30 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 font-data text-[10px] uppercase tracking-[0.2em] text-t3">
          <a href="/" className="hover:text-lime text-t2">
            CCTools Docs
          </a>
          <span className="text-t4">/</span>
          <span className="text-lime">API Reference</span>
          <span className="ml-auto flex items-center gap-3">
            <a
              href={OPENAPI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime"
            >
              OpenAPI JSON
            </a>
            <a
              href="https://status.cctools.network"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime"
            >
              Status
            </a>
            <a
              href="https://cctools.network/profile/api"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime"
            >
              Get a key
            </a>
          </span>
        </div>
      </nav>

      <style dangerouslySetInnerHTML={{ __html: CUSTOM_CSS }} />

      {/* Scalar mounts here. It renders its own header / sidebar / content
          inside this div, so we don't add our own intro above it. */}
      <section aria-label="Interactive API reference">
        <div
          id="api-reference"
          data-url={OPENAPI_URL}
          data-configuration={JSON.stringify({
            theme: "kepler",
            darkMode: true,
            hideClientButton: false,
            hideDownloadButton: false,
            layout: "modern",
            defaultOpenAllTags: false,
            withDefaultFonts: false,
            metaData: {
              title: "CCTools API",
              description:
                "Public API for the Canton Network community toolkit.",
            },
          })}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"
          strategy="afterInteractive"
        />
      </section>
    </>
  );
}
