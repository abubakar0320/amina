import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import {
  EXTENSIBLE_ACADEMIC_PROFILES,
  PRIMARY_ACADEMIC_PROFILES,
} from "@/data/publications-and-profiles";

/**
 * Preferred production domain (configurable via NEXT_PUBLIC_SITE_URL).
 * Setting NEXT_PUBLIC_SITE_URL explicitly in deployment is recommended once
 * the live production domain is verified and connected.
 */
export const PREFERRED_SITE_URL = "https://aminamumtaz.com";

function normalizeSiteUrl(rawUrl: string | undefined): string | null {
  const trimmed = rawUrl?.trim();
  if (!trimmed) return null;

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`;
    const parsed = new URL(withProtocol);
    if (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1") {
      return null;
    }
    return parsed.origin;
  } catch {
    return null;
  }
}

const ENV_SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const IS_SITE_URL_ENV_CONFIGURED = Boolean(ENV_SITE_URL);
export const SITE_URL = ENV_SITE_URL ?? PREFERRED_SITE_URL;

export function getMetadataBase(): URL {
  return new URL(SITE_URL);
}

export function toAbsoluteUrl(path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

export const SEARCH_VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION?.trim() || undefined,
} as const;

export const SITE_SEO_DEFAULTS = {
  siteName: ACADEMIC_IDENTITY.fullName,
  locale: "en_US",
  language: "en",
  defaultOgAlt: `${ACADEMIC_IDENTITY.fullName} — ${ACADEMIC_IDENTITY.designation}`,
  primaryKeywords: [
    "Amina Mumtaz",
    "Amina Mumtaz Applied Linguistics",
    "Applied Linguistics Researcher Pakistan",
    "Corpus Linguistics Research",
    "Colligation Studies",
    "English Language Teaching Research",
  ] as const,
  secondaryKeywords: [
    "Learner Corpus Research",
    "Second Language Acquisition",
    "Native and Non-Native Learner Comparison",
    "Pakistani Learner English",
    "Corpus-Based Language Analysis",
    "Research Methodology in Applied Linguistics",
  ] as const,
} as const;

/**
 * Only return external academic platform URLs that have been explicitly verified.
 * Unverified profile slots remain omitted from JSON-LD `sameAs`.
 */
export function getVerifiedSameAsUrls(): string[] {
  return [...PRIMARY_ACADEMIC_PROFILES, ...EXTENSIBLE_ACADEMIC_PROFILES]
    .filter((profile) => profile.verified && Boolean(profile.url))
    .map((profile) => profile.url as string);
}
