import type { MetadataRoute } from "next";

// Static export target — robots.txt must be fully static.
export const dynamic = "force-static";

/**
 * Robots policy. Nothing private on this site — documentation is meant to
 * be indexed. We still explicitly disallow Next.js internals just so bots
 * don't waste crawl budget on static asset paths.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://docs.cctools.network/sitemap.xml",
    host: "https://docs.cctools.network",
  };
}
