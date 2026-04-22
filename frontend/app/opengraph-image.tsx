import { ImageResponse } from "next/og";

// Static export target — OG routes must be fully static.
export const dynamic = "force-static";

// Root-level Open Graph card. Used by the site root and inherited by any
// route that doesn't ship its own opengraph-image file. We keep the
// composition deliberately simple and typographic — the logo + tagline is
// the one thing everyone should remember when the link appears in a feed.

export const alt = "CC Tools Docs — Canton Network Toolkit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(190,242,100,0.18) 0%, transparent 55%), #0c0e14",
          color: "#e8eaf0",
          fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        {/* top: brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#bef264",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0c0e14",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            C
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5 }}>
              CC Tools
            </div>
            <div style={{ fontSize: 18, color: "#bef264", fontWeight: 600 }}>
              Documentation
            </div>
          </div>
        </div>

        {/* middle: hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 960,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            Canton Network Toolkit Guides
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#9098a8",
              lineHeight: 1.35,
              maxWidth: 880,
            }}
          >
            Portfolio tracking, ecosystem discovery, rewards calculators,
            governance, academy, and more — explained.
          </div>
        </div>

        {/* bottom: url strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#6b7387",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          <span>docs.cctools.network</span>
          <span style={{ color: "#bef264" }}>canton network</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
