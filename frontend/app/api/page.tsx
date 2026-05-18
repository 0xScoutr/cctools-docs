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
 * /api — public API reference page.
 *
 * Renders the OpenAPI 3.0 spec served from api.cctools.network/api/v1/openapi.json
 * via Scalar (loaded from jsDelivr CDN — no npm dep, no lockfile change).
 * Scalar bundles its own theme + try-it-out pane so we don't ship the
 * larger Stoplight Elements bundle.
 *
 * The page is intentionally outside the /[lang]/ tree because API docs
 * aren't localized — the spec content is English. If translations are
 * needed later, wrap the relevant intro copy in a localized variant.
 */
export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="font-data text-[10px] text-lime uppercase tracking-[0.2em] font-semibold mb-2">
          API Reference
        </div>
        <h1 className="font-heading font-extrabold text-[var(--text-3xl)] text-t1 mb-3 leading-tight">
          CCTools Public API
        </h1>
        <p className="text-[var(--text-base)] text-t2 max-w-2xl leading-relaxed">
          Read-only HTTP access to the ecosystem, users, earn opportunities
          and leaderboard. All requests authenticate via the{" "}
          <code className="font-mono text-[var(--text-sm)] px-1.5 py-0.5 rounded bg-bg-surface border border-border">
            X-Api-Key
          </code>{" "}
          header. Apply for access at{" "}
          <a
            href="https://cctools.network/profile/api"
            className="text-lime hover:underline"
          >
            cctools.network/profile/api
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-3 flex-wrap font-data text-[10px] uppercase tracking-wider text-t3">
          <a
            href={OPENAPI_URL}
            className="hover:text-lime"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenAPI 3.0 spec ↗
          </a>
          <span>·</span>
          <a
            href="https://status.cctools.network"
            className="hover:text-lime"
            target="_blank"
            rel="noopener noreferrer"
          >
            Status ↗
          </a>
          <span>·</span>
          <a
            href="https://www.npmjs.com/package/@cctools/sdk-js"
            className="hover:text-lime"
            target="_blank"
            rel="noopener noreferrer"
          >
            @cctools/sdk-js ↗
          </a>
        </div>
      </header>

      {/* Scalar API Reference — drop-in CDN embed.
          docs: https://github.com/scalar/scalar */}
      <section className="w-full" aria-label="Interactive API reference">
        <div
          id="api-reference"
          data-url={OPENAPI_URL}
          data-configuration={JSON.stringify({
            theme: "kepler",
            darkMode: true,
            hideClientButton: false,
            layout: "modern",
            metaData: {
              title: "CCTools API",
              description: "Public API for the Canton Network community toolkit.",
            },
          })}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@scalar/api-reference"
          strategy="afterInteractive"
        />
      </section>
    </div>
  );
}
