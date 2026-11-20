import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import {
  SEARCH_VERIFICATION,
  SITE_SEO_DEFAULTS,
  getMetadataBase,
} from "@/config/site";
import { buildRootSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: `${ACADEMIC_IDENTITY.fullName} | Applied Linguistics Researcher`,
    template: `%s | ${ACADEMIC_IDENTITY.fullName}`,
  },
  description:
    "Explore the academic profile, research interests, publications and teaching experience of Amina Mumtaz, an Applied Linguistics researcher and university lecturer.",
  keywords: [
    ...SITE_SEO_DEFAULTS.primaryKeywords,
    ...SITE_SEO_DEFAULTS.secondaryKeywords,
  ],
  authors: [{ name: ACADEMIC_IDENTITY.fullName }],
  creator: ACADEMIC_IDENTITY.fullName,
  publisher: ACADEMIC_IDENTITY.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${ACADEMIC_IDENTITY.fullName} | Applied Linguistics Researcher`,
    description:
      "Explore the academic profile, research interests, publications and teaching experience of Amina Mumtaz, an Applied Linguistics researcher and university lecturer.",
    siteName: SITE_SEO_DEFAULTS.siteName,
    type: "website",
    locale: SITE_SEO_DEFAULTS.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_SEO_DEFAULTS.defaultOgAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ACADEMIC_IDENTITY.fullName} | Applied Linguistics Researcher`,
    description:
      "Explore the academic profile, research interests, publications and teaching experience of Amina Mumtaz, an Applied Linguistics researcher and university lecturer.",
    images: [
      {
        url: "/twitter-image",
        width: 1200,
        height: 630,
        alt: SITE_SEO_DEFAULTS.defaultOgAlt,
      },
    ],
  },
  verification:
    SEARCH_VERIFICATION.google || SEARCH_VERIFICATION.bing
      ? {
          ...(SEARCH_VERIFICATION.google
            ? { google: SEARCH_VERIFICATION.google }
            : {}),
          ...(SEARCH_VERIFICATION.bing
            ? { other: { "msvalidate.01": SEARCH_VERIFICATION.bing } }
            : {}),
        }
      : undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-pure-white text-main-text font-sans antialiased">
        <JsonLd data={buildRootSchemaGraph()} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
