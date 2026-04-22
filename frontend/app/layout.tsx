import type { Metadata, Viewport } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://docs.cctools.network";
const SITE_NAME = "CC Tools Docs";
const SITE_DESC =
  "Official documentation for CC Tools — the community toolkit for Canton Network. Guides, FAQs, and references for portfolio tracking, ecosystem discovery, rewards, governance, and more.";

export const viewport: Viewport = {
  themeColor: "#0c0e14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Canton Network Toolkit Guides`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: "CC Tools", url: "https://cctools.network" }],
  creator: "CC Tools",
  publisher: "CC Tools",
  category: "Documentation",
  keywords: [
    "Canton Network",
    "CC Tools",
    "CC Tools docs",
    "Canton Network documentation",
    "CC token",
    "Canton rewards calculator",
    "Canton validator",
    "Canton portfolio tracker",
    "Canton ecosystem",
    "Canton governance",
    "Canton leaderboard",
    "Canton staking",
    "Canton app builder",
    "CCTools guide",
    "CCTools FAQ",
    "Canton Academy",
    "Canton news",
    "Canton learn paths",
    "Canton reputation",
  ],
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Canton Network Toolkit Guides`,
    description: SITE_DESC,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CC Tools Docs — Canton Network Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Canton Network Toolkit Guides`,
    description: SITE_DESC,
    site: "@cantontools",
    creator: "@cantontools",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "x-default": `${SITE_URL}/en`,
      en: `${SITE_URL}/en`,
      es: `${SITE_URL}/es`,
      pt: `${SITE_URL}/pt`,
      zh: `${SITE_URL}/zh`,
    },
  },
  verification: {
    google: "LeEqbdZMs_zLOqGD5U2NlDGYHr1HeWUceDX5_x1i1uw",
  },
  other: {
    "msapplication-TileColor": "#0c0e14",
  },
};

// Organization + WebSite JSON-LD with SearchAction. Rendered once at the root
// so every page inherits it. Article-level schema is added per-article.
const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CC Tools",
  url: "https://cctools.network",
  logo: `${SITE_URL}/icon-512.png`,
  sameAs: [
    "https://x.com/cantontools",
    "https://cctools.network",
  ],
};

const siteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESC,
  inLanguage: ["en", "es", "pt", "zh"],
  publisher: { "@type": "Organization", name: "CC Tools", url: "https://cctools.network" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLd) }}
        />
      </head>
      <body className="min-h-full flex">
        {children}
      </body>
    </html>
  );
}
