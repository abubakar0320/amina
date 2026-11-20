/**
 * Scalable site navigation architecture for all planned website phases.
 * Phase 1 implements the Home route (/) and prepares clean structural links
 * for upcoming pages: About, Research, Publications, Teaching, Academic Profiles,
 * Academic CV, and Contact.
 */

export interface NavChildItem {
  label: string;
  href: string;
  description: string;
  external?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: readonly NavChildItem[];
}

export const PRIMARY_NAVIGATION: readonly NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "research",
    label: "Research",
    href: "/research",
    children: [
      {
        label: "Research Overview",
        href: "/research",
        description:
          "Corpus linguistics, colligation, SLA, and analytical methodology.",
      },
      {
        label: "Research Methods & Evidence",
        href: "/#research-methodology",
        description:
          "ICNALE V2.0, TagAnt POS tagging, AntConc, and Contrastive Analysis.",
      },
      {
        label: "Academic Profiles",
        href: "/publications#academic-profiles",
        description:
          "Scholarly identifiers, researcher platforms, and academic links.",
      },
    ],
  },
  {
    id: "publications",
    label: "Publications",
    href: "/publications",
  },
  {
    id: "teaching",
    label: "Teaching",
    href: "/teaching",
  },
  {
    id: "cv",
    label: "Academic CV",
    href: "/cv",
  },
];

export const CONTACT_NAV_ITEM = {
  label: "Contact",
  href: "/contact",
} as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Academic Site",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Research", href: "/research" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    heading: "Scholarship & CV",
    links: [
      { label: "Teaching", href: "/teaching" },
      { label: "Academic Profiles", href: "/publications#academic-profiles" },
      { label: "Academic CV", href: "/cv" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const LIVE_SITE_DIRECTORY = [
  { label: "Home", href: "/" },
  { label: "About & Academic Profile", href: "/about" },
  { label: "Research & Expertise", href: "/research" },
  { label: "Publications & Profiles", href: "/publications" },
  { label: "Teaching & Resources", href: "/teaching" },
  { label: "Academic CV", href: "/cv" },
  { label: "Professional Contact", href: "/contact" },
] as const;

export const PLANNED_SECTIONS_DIRECTORY: ReadonlyArray<{
  label: string;
  href: string;
  phase: string;
}> = [];
