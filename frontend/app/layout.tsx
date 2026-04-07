import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "CCTools Docs",
    template: "%s | CCTools Docs",
  },
  description:
    "Documentation, guides, and FAQs for CCTools — the leading multi-tool platform for Canton Network.",
  openGraph: {
    title: "CCTools Docs",
    description:
      "Documentation, guides, and FAQs for CCTools — the leading multi-tool platform for Canton Network.",
    siteName: "CCTools Docs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@cantontools",
  },
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
      <body className="min-h-full flex">
        {children}
      </body>
    </html>
  );
}
