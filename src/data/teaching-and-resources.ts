/**
 * Authoritative data configuration for Teaching Experience, Teaching Interests,
 * Teaching Philosophy themes, Pedagogical Exploration Tools, and the scalable
 * Academic Learning Resources Library.
 * Grounded strictly in Amina_Mumtaz_Academic_CV.pdf without fabricated courses,
 * dates, certifications, testimonials, or fictional materials.
 */

export interface TeachingPositionItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  appointmentType: "University Teaching" | "College Teaching";
}

export interface TeachingInterestCardItem {
  id: string;
  title: string;
  description: string;
  iconName: "Terminal" | "Languages" | "Feather" | "Compass";
}

export interface PhilosophyThemeItem {
  number: string;
  title: string;
  description: string;
}

export type ResourceCategoryCode = "A" | "B" | "C" | "D";

export interface ResourceCategoryItem {
  code: ResourceCategoryCode;
  title: string;
  topics: readonly string[];
  iconName: "DatabaseSearch" | "Languages" | "GraduationCap" | "Compass";
}

export type ResourceType =
  | "Reading Guide"
  | "Study Sheet"
  | "Corpus Guide"
  | "Reference Link"
  | "Academic Note";

export interface AcademicResource {
  id: string;
  title: string;
  category: ResourceCategoryCode;
  categoryLabel: string;
  description: string;
  resourceType: ResourceType;
  date: string;
  href: string;
  isExternal?: boolean;
  isDownload?: boolean;
  authorAttribution: string;
  tags?: readonly string[];
}

export interface AcademicToolRelevanceItem {
  id: string;
  name: string;
  kind: "Corpus" | "Software" | "Analytical Method";
  relevance: string;
  iconName:
    | "Search"
    | "Tag"
    | "Database"
    | "ListFilter"
    | "AlignCenter"
    | "GitCompare";
}

export const TEACHING_HERO_CONTENT = {
  eyebrow: "TEACHING & EDUCATION",
  pageTitle: "Teaching & Academic Resources",
  headline: "Teaching Language. Inspiring Learning.",
  supportingDescription:
    "Exploring language education, linguistic analysis, and research-informed approaches to English language teaching.",
  designation:
    "Amina Mumtaz — Applied Linguistics Researcher & University Lecturer.",
} as const;

export const VERIFIED_TEACHING_POSITIONS: readonly TeachingPositionItem[] = [
  {
    id: "teaching-bgnu",
    role: "Visiting Lecturer",
    institution: "Baba Guru Nanak University (BGNU)",
    location: "Nankana Sahib, Pakistan",
    appointmentType: "University Teaching",
  },
  {
    id: "teaching-shiblee",
    role: "Lecturer",
    institution: "Shiblee College",
    location: "Safdarabad, Pakistan",
    appointmentType: "College Teaching",
  },
  {
    id: "teaching-eqan",
    role: "Lecturer",
    institution: "Eqan Girls College",
    location: "Shahkot, Pakistan",
    appointmentType: "College Teaching",
  },
];

export const TEACHING_SUBJECT_INTERESTS: readonly TeachingInterestCardItem[] = [
  {
    id: "interest-corpus-tools",
    title: "Corpus Tools",
    description:
      "Academic interest in corpus-based language research tools and their application in linguistic analysis.",
    iconName: "Terminal",
  },
  {
    id: "interest-sla",
    title: "Second Language Acquisition",
    description:
      "Academic interest in language learning and second-language development.",
    iconName: "Languages",
  },
  {
    id: "interest-stylistics",
    title: "Stylistics",
    description:
      "Interest in linguistic approaches to the analysis of style and language use.",
    iconName: "Feather",
  },
  {
    id: "interest-research-methodology",
    title: "Research Methodology",
    description:
      "Interest in research methods and analytical approaches in academic inquiry.",
    iconName: "Compass",
  },
];

export const TEACHING_PHILOSOPHY_THEMES: readonly PhilosophyThemeItem[] = [
  {
    number: "01",
    title: "Encouraging Curiosity About Language",
    description:
      "Viewing language inquiry as an invitation for students to ask how grammar, vocabulary, and discourse operate across real communicative contexts.",
  },
  {
    number: "02",
    title: "Understanding Language Through Examples and Analysis",
    description:
      "Illuminating linguistic principles with authentic language examples so learners can observe patterns directly rather than memorizing rules in isolation.",
  },
  {
    number: "03",
    title: "Connecting Linguistic Theory With Practical Language Use",
    description:
      "Bridging conceptual frameworks from Applied Linguistics with everyday academic reading, writing, and classroom communication.",
  },
  {
    number: "04",
    title: "Supporting Critical Thinking",
    description:
      "Developing habits of careful textual interpretation, evidence-based reasoning, and reflective linguistic evaluation.",
  },
  {
    number: "05",
    title: "Promoting Research-Informed Learning",
    description:
      "Integrating scholarly awareness of corpus methods and learner-language inquiry to nurture independent academic curiosity.",
  },
];

export const RESOURCE_CATEGORIES: readonly ResourceCategoryItem[] = [
  {
    code: "A",
    title: "Corpus Linguistics",
    topics: [
      "Introduction to corpus-based language analysis",
      "Corpus research concepts",
      "Concordance and KWIC concepts",
    ],
    iconName: "DatabaseSearch",
  },
  {
    code: "B",
    title: "Applied Linguistics",
    topics: [
      "Applied Linguistics concepts",
      "Learner language",
      "Second Language Acquisition",
    ],
    iconName: "Languages",
  },
  {
    code: "C",
    title: "English Language Teaching",
    topics: ["ELT concepts", "Language learning", "Curriculum design"],
    iconName: "GraduationCap",
  },
  {
    code: "D",
    title: "Research Methodology",
    topics: [
      "Research design concepts",
      "Qualitative and quantitative approaches",
      "Research tools and analytical techniques",
    ],
    iconName: "Compass",
  },
];

/**
 * Scalable Academic Resources catalogue.
 * Intentionally empty until verified educational materials are supplied.
 */
export const ACADEMIC_RESOURCES: readonly AcademicResource[] = [];

export const TOOLS_FOR_LINGUISTIC_EXPLORATION: readonly AcademicToolRelevanceItem[] =
  [
    {
      id: "explore-antconc",
      name: "AntConc",
      kind: "Software",
      relevance:
        "Supports classroom and independent exploration of authentic text collections through concordance queries and frequency observation.",
      iconName: "Search",
    },
    {
      id: "explore-tagant",
      name: "TagAnt",
      kind: "Software",
      relevance:
        "Demonstrates automated part-of-speech tagging (such as C5 and C7 tagsets) for examining grammatical categories across texts.",
      iconName: "Tag",
    },
    {
      id: "explore-icnale",
      name: "ICNALE V2.0",
      kind: "Corpus",
      relevance:
        "Provides structured native-speaker and learner English writing samples useful for illustrating comparative learner-language patterns.",
      iconName: "Database",
    },
    {
      id: "explore-concordance",
      name: "Concordance Analysis",
      kind: "Analytical Method",
      relevance:
        "Helps students and scholars inspect how words and grammatical structures behave across multiple authentic occurrences.",
      iconName: "ListFilter",
    },
    {
      id: "explore-kwic",
      name: "KWIC Analysis",
      kind: "Analytical Method",
      relevance:
        "Highlights Key-Word-in-Context alignments so learners can observe immediate left and right syntactic surroundings directly.",
      iconName: "AlignCenter",
    },
    {
      id: "explore-cia",
      name: "Contrastive Interlanguage Analysis",
      kind: "Analytical Method",
      relevance:
        "Frames systematic comparison between learner English and reference corpora to clarify developmental and structural tendencies.",
      iconName: "GitCompare",
    },
  ];

export const ENGAGEMENT_OPPORTUNITIES = [
  "Applied Linguistics discussions",
  "Corpus Linguistics concepts",
  "English language learning",
  "Research methodology",
  "Academic knowledge exchange",
] as const;
