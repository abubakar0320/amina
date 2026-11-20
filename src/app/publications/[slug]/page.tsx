import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import {
  PUBLICATIONS,
  getPublicationBySlug,
} from "@/data/publications-and-profiles";
import { SITE_SEO_DEFAULTS } from "@/config/site";
import { buildScholarlyArticleSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { PublicationDetailLayout } from "@/components/publications/PublicationDetailLayout";

export function generateStaticParams() {
  return PUBLICATIONS.map((publication) => ({
    slug: publication.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/publications/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    return {
      title: `Publication Not Found | ${ACADEMIC_IDENTITY.fullName}`,
      robots: { index: false, follow: false },
    };
  }

  const pagePath = `/publications/${publication.slug}`;
  const description = `${publication.authors.join(", ")} (${publication.year}). ${publication.journal}, ${publication.volume}(${publication.issue}), ${publication.pages}.`;

  return {
    title: {
      absolute: `${publication.title} | ${ACADEMIC_IDENTITY.fullName}`,
    },
    description,
    keywords: [
      ...SITE_SEO_DEFAULTS.primaryKeywords,
      publication.category,
      publication.journal,
      ...publication.methodologyItems.slice(0, 5),
    ],
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      title: publication.title,
      description: `${publication.journal}, Volume ${publication.volume}, Issue ${publication.issue}, pp. ${publication.pages} (${publication.publishedDate}).`,
      url: pagePath,
      siteName: SITE_SEO_DEFAULTS.siteName,
      locale: SITE_SEO_DEFAULTS.locale,
      type: "article",
      publishedTime: publication.publishedIsoDate,
      authors: [...publication.authors],
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${publication.title} — ${ACADEMIC_IDENTITY.fullName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: publication.title,
      description: `${publication.journal}, Vol. ${publication.volume}(${publication.issue}), pp. ${publication.pages}.`,
      images: [
        {
          url: "/twitter-image",
          width: 1200,
          height: 630,
          alt: `${publication.title} — ${ACADEMIC_IDENTITY.fullName}`,
        },
      ],
    },
  };
}

async function PublicationDetailContent({
  params,
}: Pick<PageProps<"/publications/[slug]">, "params">) {
  const { slug } = await params;
  const publication = getPublicationBySlug(slug);

  if (!publication) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildScholarlyArticleSchemaGraph(publication)} />
      <PublicationDetailLayout publication={publication} />
    </>
  );
}

function PublicationDetailFallback() {
  return (
    <Container className="py-20">
      <div className="h-64 rounded-2xl border border-border-subtle bg-soft-blue/60" />
    </Container>
  );
}

export default function PublicationDetailPage({
  params,
}: PageProps<"/publications/[slug]">) {
  return (
    <Suspense fallback={<PublicationDetailFallback />}>
      <PublicationDetailContent params={params} />
    </Suspense>
  );
}
