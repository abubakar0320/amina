import type { Metadata } from "next";
import { SITE_SEO_DEFAULTS } from "@/config/site";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  openGraphType?: "website" | "profile" | "article";
  openGraphTitle?: string;
  openGraphDescription?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  openGraphType = "website",
  openGraphTitle,
  openGraphDescription,
}: PageMetadataOptions): Metadata {
  const ogTitle = openGraphTitle ?? title;
  const ogDescription = openGraphDescription ?? description;
  const mergedKeywords = Array.from(
    new Set([...keywords, ...SITE_SEO_DEFAULTS.primaryKeywords])
  );

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: path,
      siteName: SITE_SEO_DEFAULTS.siteName,
      locale: SITE_SEO_DEFAULTS.locale,
      type: openGraphType,
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
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: "/twitter-image",
          width: 1200,
          height: 630,
          alt: SITE_SEO_DEFAULTS.defaultOgAlt,
        },
      ],
    },
    authors: [{ name: ACADEMIC_IDENTITY.fullName }],
  };
}
