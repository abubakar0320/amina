/**
 * Central, extensible data configuration for verified scholarly publications
 * and academic researcher profiles. All records reflect verified details
 * from Amina_Mumtaz_Academic_CV.pdf without fabricated DOIs, metrics, or URLs.
 */

export type PublicationType =
  | "Journal Article"
  | "Conference Paper"
  | "Book Chapter"
  | "Thesis";

export interface ScholarlyPublication {
  slug: string;
  title: string;
  authors: readonly string[];
  journal: string;
  volume: string;
  issue: string;
  pages: string;
  publishedDate: string;
  publishedIsoDate: string;
  year: number;
  type: PublicationType;
  category: string;
  featured: boolean;
  doi?: string;
  externalUrl?: string;
  citation: string;
  overviewNotes: readonly string[];
  methodologyItems: readonly string[];
  supervisorAcknowledgement: {
    name: string;
    department: string;
  };
}

export interface AcademicProfilePlatform {
  id: string;
  name: string;
  tier: "primary" | "extensible";
  purpose: string;
  brandMark: string;
  badgeBgHex: string;
  badgeTextHex: string;
  badgeBorderHex: string;
  identifierLabel?: string;
  identifier?: string;
  url?: string;
  verified: boolean;
}

export const PUBLICATIONS: readonly ScholarlyPublication[] = [
  {
    slug: "study-of-colligation",
    title:
      "Study of colligation: A comparison between native learners and non-native Pakistani learners.",
    authors: ["Amina Mumtaz"],
    journal: "Advance Social Science Archive Journal",
    volume: "5",
    issue: "2",
    pages: "1318–1337",
    publishedDate: "28 May 2026",
    publishedIsoDate: "2026-05-28",
    year: 2026,
    type: "Journal Article",
    category: "Corpus Linguistics & Colligation",
    featured: true,
    doi: undefined,
    externalUrl: "https://assajournal.com/index.php/36/article/view/1795",
    citation:
      "Mumtaz, A. (2026). Study of colligation: A comparison between native learners and non-native Pakistani learners. Advance Social Science Archive Journal, 5(2), 1318–1337.",
    overviewNotes: [
      "Published in Advance Social Science Archive Journal (Volume 5, Issue 2, pp. 1318–1337) on 28 May 2026, this peer-reviewed study examines colligation through a comparative analysis between native English learners and non-native Pakistani learners.",
      "This research aligns with Amina Mumtaz's graduate specialization in Applied Linguistics and corpus-based analysis of learner English at Government College University Faisalabad (GCUF). The complete published text is accessible directly through the journal record linked below.",
    ],
    methodologyItems: [
      "ICNALE V2.0 corpus",
      "800 English writing samples",
      "400 Pakistani learner samples",
      "400 native-speaker samples",
      "TagAnt POS tagging (C5 and C7 tagsets)",
      "AntConc",
      "Concordance and KWIC analysis",
      "Contrastive Interlanguage Analysis",
      "Log-likelihood",
      "Error analysis",
    ],
    supervisorAcknowledgement: {
      name: "Dr. Muhammad Imran Shah",
      department: "Department of Applied Linguistics, GCUF",
    },
  },
];

export function getFeaturedPublication(): ScholarlyPublication | undefined {
  return PUBLICATIONS.find((pub) => pub.featured) ?? PUBLICATIONS[0];
}

export function getPublicationBySlug(
  slug: string
): ScholarlyPublication | undefined {
  return PUBLICATIONS.find((pub) => pub.slug === slug);
}

/**
 * Primary academic platform cards displayed in "Find Me on Academic Platforms".
 * Set verified: true and provide url (and identifier where applicable) once confirmed.
 */
export const PRIMARY_ACADEMIC_PROFILES: readonly AcademicProfilePlatform[] = [
  {
    id: "google-scholar",
    name: "Google Scholar",
    tier: "primary",
    purpose: "Research publications and citation profile.",
    brandMark: "GS",
    badgeBgHex: "#EEF4FD",
    badgeTextHex: "#1E4C9A",
    badgeBorderHex: "#C7DBF8",
    identifierLabel: "Scholar Profile",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
  {
    id: "orcid",
    name: "ORCID",
    tier: "primary",
    purpose: "Persistent researcher identification and scholarly record management.",
    brandMark: "iD",
    badgeBgHex: "#A6CE39",
    badgeTextHex: "#1F2B06",
    badgeBorderHex: "#8DB423",
    identifierLabel: "ORCID iD",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    tier: "primary",
    purpose: "Professional academic networking and career profile.",
    brandMark: "in",
    badgeBgHex: "#0A66C2",
    badgeTextHex: "#FFFFFF",
    badgeBorderHex: "#08529C",
    identifierLabel: "LinkedIn Profile",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
];

/**
 * Extensible scholarly identifier slots. Entries render publicly only when
 * verified === true and a confirmed identifier or URL is provided.
 */
export const EXTENSIBLE_ACADEMIC_PROFILES: readonly AcademicProfilePlatform[] = [
  {
    id: "researchgate",
    name: "ResearchGate",
    tier: "extensible",
    purpose: "Scholarly article sharing and academic Q&A.",
    brandMark: "RG",
    badgeBgHex: "#E6F6F3",
    badgeTextHex: "#0C5A4C",
    badgeBorderHex: "#BFE7DF",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
  {
    id: "scopus-author-id",
    name: "Scopus Author ID",
    tier: "extensible",
    purpose: "Indexed author identifier and bibliographic record.",
    brandMark: "SC",
    badgeBgHex: "#FFF2E8",
    badgeTextHex: "#7A340B",
    badgeBorderHex: "#F5D0B5",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
  {
    id: "web-of-science",
    name: "Web of Science Researcher Profile",
    tier: "extensible",
    purpose: "Verified researcher profile and peer-review record.",
    brandMark: "WoS",
    badgeBgHex: "#F2ECF9",
    badgeTextHex: "#44286B",
    badgeBorderHex: "#DCD0EE",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
  {
    id: "academia-edu",
    name: "Academia.edu",
    tier: "extensible",
    purpose: "Academic paper repository and readership network.",
    brandMark: "A",
    badgeBgHex: "#EAF0FA",
    badgeTextHex: "#253B70",
    badgeBorderHex: "#D4E0F3",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
  {
    id: "institutional-faculty-profile",
    name: "Institutional Faculty Profile",
    tier: "extensible",
    purpose: "Official university faculty directory profile.",
    brandMark: "Inst",
    badgeBgHex: "#F0EBF7",
    badgeTextHex: "#192B50",
    badgeBorderHex: "#DDD3EE",
    identifier: undefined,
    url: undefined,
    verified: false,
  },
];

export function getVerifiedExtensibleProfiles(): AcademicProfilePlatform[] {
  return EXTENSIBLE_ACADEMIC_PROFILES.filter(
    (profile) => profile.verified && Boolean(profile.url || profile.identifier)
  );
}
