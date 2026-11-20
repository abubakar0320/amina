import {
  SITE_URL,
  getVerifiedSameAsUrls,
  toAbsoluteUrl,
} from "@/config/site";
import {
  ACADEMIC_IDENTITY,
  EDUCATION_RECORDS,
  RESEARCH_INTEREST_AREAS,
} from "@/data/academic-profile";
import type { ScholarlyPublication } from "@/data/publications-and-profiles";

export interface BreadcrumbTrailItem {
  name: string;
  path: string;
}

export type SchemaPageType =
  | "WebPage"
  | "ProfilePage"
  | "CollectionPage"
  | "ContactPage";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * Authoritative Schema.org Person entity grounded strictly in verified CV data.
 * External platform URLs (`sameAs`) and identifiers are included only when verified.
 */
export function buildPersonEntity() {
  const sameAs = getVerifiedSameAsUrls();

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: ACADEMIC_IDENTITY.fullName,
    url: toAbsoluteUrl("/"),
    mainEntityOfPage: toAbsoluteUrl("/about"),
    jobTitle: ACADEMIC_IDENTITY.designation,
    description: ACADEMIC_IDENTITY.profileSummary,
    email: `mailto:${ACADEMIC_IDENTITY.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Shahkot",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Government College University Faisalabad",
    },
    hasCredential: EDUCATION_RECORDS.map((record) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: record.degree,
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Government College University Faisalabad",
      },
    })),
    knowsAbout: [
      ...RESEARCH_INTEREST_AREAS.map((area) => area.title),
      "Contrastive Interlanguage Analysis",
      "ICNALE V2.0",
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebSiteEntity() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: toAbsoluteUrl("/"),
    name: `${ACADEMIC_IDENTITY.fullName} | Applied Linguistics Researcher`,
    description:
      "Academic research website presenting the educational background, corpus linguistics methodology, publication, and teaching experience of Amina Mumtaz.",
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
    author: { "@id": PERSON_ID },
  };
}

export function buildRootSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildPersonEntity(), buildWebSiteEntity()],
  };
}

export function buildBreadcrumbList(
  trail: readonly BreadcrumbTrailItem[],
  pageUrl: string
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export interface PageSchemaOptions {
  path: string;
  name: string;
  description: string;
  pageType?: SchemaPageType;
  breadcrumbs?: readonly BreadcrumbTrailItem[];
  mainEntityPerson?: boolean;
}

export function buildPageSchemaGraph({
  path,
  name,
  description,
  pageType = "WebPage",
  breadcrumbs,
  mainEntityPerson = false,
}: PageSchemaOptions) {
  const pageUrl = toAbsoluteUrl(path);
  const breadcrumbId = breadcrumbs?.length ? `${pageUrl}#breadcrumb` : undefined;

  const pageEntity = {
    "@type": pageType,
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    ...(mainEntityPerson ? { mainEntity: { "@id": PERSON_ID } } : {}),
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
  };

  const graph: Record<string, unknown>[] = [pageEntity];

  if (breadcrumbs?.length) {
    graph.push(buildBreadcrumbList(breadcrumbs, pageUrl));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildScholarlyArticleSchemaGraph(
  publication: ScholarlyPublication
) {
  const path = `/publications/${publication.slug}`;
  const pageUrl = toAbsoluteUrl(path);
  const articleId = `${pageUrl}#article`;
  const [pageStart, pageEnd] = publication.pages.split("–");
  const breadcrumbs: BreadcrumbTrailItem[] = [
    { name: "Home", path: "/" },
    { name: "Research Publications", path: "/publications" },
    { name: publication.title, path },
  ];

  const scholarlyArticle = {
    "@type": "ScholarlyArticle",
    "@id": articleId,
    headline: publication.title,
    name: publication.title,
    inLanguage: "en",
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    author: publication.authors.map((authorName) =>
      authorName === ACADEMIC_IDENTITY.fullName
        ? { "@type": "Person", "@id": PERSON_ID, name: authorName }
        : { "@type": "Person", name: authorName }
    ),
    datePublished: publication.publishedIsoDate,
    ...(pageStart ? { pageStart } : {}),
    ...(pageEnd ? { pageEnd } : {}),
    keywords: [publication.category, ...publication.methodologyItems.slice(0, 6)],
    isPartOf: {
      "@type": "PublicationIssue",
      issueNumber: publication.issue,
      isPartOf: {
        "@type": "PublicationVolume",
        volumeNumber: publication.volume,
        isPartOf: {
          "@type": "Periodical",
          name: publication.journal,
        },
      },
    },
    ...(publication.externalUrl
      ? {
          url: publication.externalUrl,
          sameAs: publication.externalUrl,
        }
      : {}),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${publication.title} | ${ACADEMIC_IDENTITY.fullName}`,
    description: `${publication.authors.join(", ")} (${publication.year}). ${publication.journal}, ${publication.volume}(${publication.issue}), ${publication.pages}.`,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": articleId },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      webPage,
      scholarlyArticle,
      buildBreadcrumbList(breadcrumbs, pageUrl),
    ],
  };
}
