import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/ThemeScript";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://melissadowell.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Melissa Dowell — Product Designer",
    template: "%s · Melissa Dowell",
  },
  description:
    "Product designer for complex technical systems — design systems, product, and research across security, music, and edge AI.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Melissa Dowell",
    title: "Melissa Dowell — Product Designer",
    description:
      "Product designer for complex technical systems — design systems, product, and research across security, music, and edge AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melissa Dowell — Product Designer",
    description:
      "Product designer for complex technical systems — design systems, product, and research across security, music, and edge AI.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <ThemeScript />
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
