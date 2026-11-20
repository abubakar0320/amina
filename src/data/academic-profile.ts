/**
 * Authoritative Academic Profile Data for Amina Mumtaz.
 * All biographical, educational, publication, methodology, and teaching records
 * are grounded strictly in Amina_Mumtaz_Academic_CV.pdf.
 */

export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  institutionShort: string;
  cgpa: string;
  note: string;
}

export interface PublicationRecord {
  id: string;
  author: string;
  year: number;
  title: string;
  journal: string;
  volumeIssue: string;
  pages: string;
  publishedDate: string;
  url: string;
  citation: string;
  statusLabel: string;
  focusTags: readonly string[];
}

export interface ThesisDetails {
  title: string;
  supervisor: string;
  corpusScope: string;
  analyticalTools: readonly string[];
}

export interface TeachingAppointment {
  id: string;
  role: string;
  institution: string;
  location: string;
  level: string;
  focusNote: string;
}

export interface ResearchInterestArea {
  id: string;
  title: string;
  summary: string;
  keywords: readonly string[];
  iconName:
    | "BookOpen"
    | "GitCompare"
    | "Languages"
    | "GraduationCap"
    | "Layers"
    | "DatabaseSearch"
    | "FileSearch";
}

export interface MethodologyStep {
  step: string;
  title: string;
  tools: readonly string[];
  description: string;
}

export const ACADEMIC_IDENTITY = {
  fullName: "Amina Mumtaz",
  wordmark: "AMINA MUMTAZ",
  descriptor: "Applied Linguistics & Research",
  designation: "Applied Linguistics Researcher & University Lecturer",
  specializations: [
    "Applied Linguistics",
    "Corpus Linguistics",
    "English Language Teaching",
  ] as const,
  specializationHeadline:
    "Applied Linguistics, Corpus Linguistics and English Language Teaching",
  shortRole: "Applied Linguistics Researcher & University Lecturer",
  location: "Shahkot, Punjab, Pakistan",
  regionSummary: "Based in Punjab, Pakistan.",
  email: "aminamumtazskt@outlook.com",
  phone: "+92 325 6678414",
  phoneHref: "tel:+923256678414",
  cvPath: "/cv/Amina_Mumtaz_Academic_CV.pdf",
  cvFileName: "Amina_Mumtaz_Academic_CV.pdf",
  copyrightYear: "2026",
  profileSummary:
    "Applied Linguistics graduate and university-level English lecturer with research experience in corpus-based analysis of learner English. Academic interests include colligation, comparative learner-corpus research, second-language acquisition, English Language Teaching (ELT), and curriculum design. Seeking doctoral research opportunities in Applied Linguistics and related fields.",
  heroEyebrow: "ACADEMIC PROFILE · APPLIED LINGUISTICS",
  heroHeadlineLine1: "Exploring Language.",
  heroHeadlineLine2: "Advancing Knowledge.",
  heroSummary:
    "An Applied Linguistics researcher and university lecturer with academic interests in corpus-based language analysis, colligation, second-language acquisition, and English language teaching.",
} as const;

export const HERO_HIGHLIGHTS = [
  {
    label: "Qualification",
    value: "MPhil in Applied Linguistics",
    detail: "GCUF · CGPA 3.27 / 4.00",
  },
  {
    label: "Corpus Scope",
    value: "ICNALE V2.0 Comparative Study",
    detail: "800 Writing Samples Analyzed",
  },
  {
    label: "Scholarship",
    value: "2026 Published Researcher",
    detail: "Advance Social Science Archive Journal",
  },
] as const;

export const EDUCATION_RECORDS: readonly EducationRecord[] = [
  {
    id: "mphil-applied-linguistics",
    degree: "MPhil in Applied Linguistics",
    institution: "Government College University Faisalabad (GCUF)",
    institutionShort: "GCUF",
    cgpa: "3.27 / 4.00",
    note: "Graduate thesis in corpus-based comparative colligation analysis of native and Pakistani learner English.",
  },
  {
    id: "bs-english",
    degree: "BS (Hons) in English Literature & Linguistics",
    institution: "Government College University Faisalabad (GCUF)",
    institutionShort: "GCUF",
    cgpa: "3.13 / 4.00",
    note: "Undergraduate foundation in theoretical linguistics, literary analysis, and academic discourse.",
  },
];

export const RESEARCH_INTEREST_AREAS: readonly ResearchInterestArea[] = [
  {
    id: "corpus-linguistics",
    title: "Corpus Linguistics",
    summary:
      "Empirical, computer-assisted investigation of authentic language data to uncover measurable lexical and grammatical patterns in English.",
    keywords: ["ICNALE V2.0", "Quantitative Corpora", "Concordancing"],
    iconName: "DatabaseSearch",
  },
  {
    id: "colligation-studies",
    title: "Colligation Studies",
    summary:
      "Analyzing grammatical co-occurrence preferences and structural partnerships across part-of-speech tagged learner and native corpora.",
    keywords: ["Grammatical Patterning", "TagAnt POS", "C5 & C7 Tagsets"],
    iconName: "Layers",
  },
  {
    id: "learner-language-analysis",
    title: "Learner Language Analysis",
    summary:
      "Systematic contrastive comparison of Pakistani EFL/ESL writing against native reference benchmarks to illuminate interlanguage tendencies.",
    keywords: ["Contrastive Analysis", "Error Analysis", "Log-Likelihood"],
    iconName: "GitCompare",
  },
  {
    id: "second-language-acquisition",
    title: "Second Language Acquisition",
    summary:
      "Examining developmental stages, cross-linguistic transfer, and syntactic choices shaping second-language academic writing proficiency.",
    keywords: ["Interlanguage", "L2 Writing", "Developmental Patterns"],
    iconName: "Languages",
  },
  {
    id: "english-language-teaching",
    title: "English Language Teaching",
    summary:
      "Translating empirical learner-corpus evidence into university-level English instruction, stylistics, and data-driven classroom pedagogy.",
    keywords: ["University ELT", "Corpus Pedagogy", "Stylistics"],
    iconName: "GraduationCap",
  },
  {
    id: "curriculum-design",
    title: "Curriculum Design",
    summary:
      "Structuring academic English syllabi and instructional materials grounded in learners' documented grammatical and discourse needs.",
    keywords: ["Syllabus Planning", "Academic English", "Materials Design"],
    iconName: "BookOpen",
  },
];

export const FEATURED_PUBLICATION: PublicationRecord = {
  id: "mumtaz-2026-colligation",
  author: "Amina Mumtaz",
  year: 2026,
  title:
    "Study of Colligation: A Comparison Between Native Learners and Non-Native Pakistani Learners.",
  journal: "Advance Social Science Archive Journal",
  volumeIssue: "5(2)",
  pages: "1318–1337",
  publishedDate: "28 May 2026",
  url: "https://assajournal.com/index.php/36/article/view/1795",
  citation:
    "Mumtaz, A. (2026). Study of colligation: A comparison between native learners and non-native Pakistani learners. Advance Social Science Archive Journal, 5(2), 1318–1337.",
  statusLabel: "2026 · Peer-Reviewed Article",
  focusTags: [
    "Colligation",
    "Corpus Linguistics",
    "Pakistani Learner English",
    "Native vs. Non-Native Comparison",
  ],
};

export const MPHIL_THESIS: ThesisDetails = {
  title:
    "Corpus-Based Study of Colligations: A Comparison Between Native Learners and Non-Native Learners of Pakistan",
  supervisor: "Dr. Muhammad Imran Shah, Department of Applied Linguistics, GCUF",
  corpusScope:
    "Comparative analysis of 800 English writing samples, including 400 Pakistani and 400 native-speaker samples, using the ICNALE V2.0 corpus.",
  analyticalTools: [
    "ICNALE V2.0 Corpus",
    "TagAnt POS Tagging (C5 & C7)",
    "AntConc",
    "Concordance & KWIC Analysis",
    "Contrastive Interlanguage Analysis (CIA)",
    "Log-likelihood",
    "Error Analysis",
  ],
};

export const METHODOLOGY_DATASET_METRICS = [
  {
    value: "800",
    label: "Total English Writing Samples",
    caption: "Balanced learner-corpus sample drawn from ICNALE V2.0 for MPhil comparative analysis.",
  },
  {
    value: "400",
    label: "Pakistani Learner Samples",
    caption: "Non-native university learner English texts examined for colligational patterning.",
  },
  {
    value: "400",
    label: "Native-Speaker Samples",
    caption: "Reference-norm English texts enabling systematic contrastive evaluation.",
  },
] as const;

export const METHODOLOGY_PIPELINE: readonly MethodologyStep[] = [
  {
    step: "01",
    title: "Corpus Compilation",
    tools: ["ICNALE V2.0 corpus"],
    description:
      "Curated 800 balanced argumentative English writing samples (400 Pakistani learners and 400 native speakers) from the International Corpus Network of Asian Learners of English.",
  },
  {
    step: "02",
    title: "Grammatical POS Tagging",
    tools: ["TagAnt", "C5 & C7 tagsets"],
    description:
      "Annotated learner and native texts using TagAnt part-of-speech tagging to isolate grammatical category co-occurrences systematically.",
  },
  {
    step: "03",
    title: "Concordance & KWIC Inspection",
    tools: ["AntConc", "Concordance and KWIC analysis"],
    description:
      "Executed corpus queries and Key-Word-in-Context (KWIC) concordance inspections in AntConc to verify structural colligation environments.",
  },
  {
    step: "04",
    title: "Statistical & Interlanguage Evaluation",
    tools: [
      "Contrastive Interlanguage Analysis",
      "Log-likelihood",
      "Error analysis",
    ],
    description:
      "Measured statistically significant overuse and underuse via log-likelihood ratios, paired with Contrastive Interlanguage Analysis and qualitative error analysis.",
  },
];

export const TEACHING_APPOINTMENTS: readonly TeachingAppointment[] = [
  {
    id: "bgnu-visiting",
    role: "Visiting Lecturer",
    institution: "Baba Guru Nanak University",
    location: "Nankana Sahib",
    level: "University Instruction",
    focusNote:
      "University-level English and linguistics instruction supporting undergraduate academic discourse and research orientation.",
  },
  {
    id: "shiblee-lecturer",
    role: "Lecturer",
    institution: "Shiblee College",
    location: "Safdarabad",
    level: "College Instruction",
    focusNote:
      "Dedicated English language and literature instruction developing analytical writing and foundational linguistic competence.",
  },
  {
    id: "eqan-lecturer",
    role: "Lecturer",
    institution: "Eqan Girls College",
    location: "Shahkot",
    level: "College Instruction",
    focusNote:
      "Classroom English language teaching focused on grammar precision, academic reading, and student communication skills.",
  },
];

export const TEACHING_INTERESTS = [
  "Corpus tools",
  "Second-language acquisition",
  "Stylistics",
  "Research methodology",
] as const;

export const TECHNICAL_COMPETENCIES = [
  "ICNALE V2.0",
  "TagAnt POS tagging",
  "AntConc",
  "Concordance and KWIC analysis",
  "Contrastive Interlanguage Analysis (CIA)",
  "Log-likelihood",
  "Error analysis",
] as const;

export const ACADEMIC_REFERENCE = {
  name: "Dr. Muhammad Imran Shah",
  title: "MPhil Supervisor, Department of Applied Linguistics, GCUF",
} as const;

export interface AboutResearchInterestItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | "DatabaseSearch"
    | "Layers"
    | "GitCompare"
    | "Languages"
    | "GraduationCap"
    | "BookOpen";
}

export interface AboutTeachingInterestItem {
  id: string;
  title: string;
  description: string;
  iconName: "Terminal" | "Languages" | "Feather" | "Compass";
}

export const ABOUT_HERO_CONTENT = {
  eyebrow: "ABOUT THE RESEARCHER",
  pageTitle: "About Amina Mumtaz",
  pageSubtitle: "Academic Journey, Research Interests & Teaching Experience",
  headline: "An Academic Journey Driven by Curiosity and Research",
  paragraphs: [
    "Amina Mumtaz is an Applied Linguistics graduate and university-level English lecturer with research experience in corpus-based analysis of learner English.",
    "Her academic interests include colligation, comparative learner-corpus research, second-language acquisition, English Language Teaching (ELT), and curriculum design.",
  ] as const,
} as const;

export const ABOUT_BIOGRAPHY_PARAGRAPHS = [
  "Amina Mumtaz has completed an MPhil in Applied Linguistics and a BS (Hons) in English Literature & Linguistics from Government College University Faisalabad (GCUF), building a disciplined academic foundation at the intersection of linguistic theory, textual inquiry, and English language education.",
  "Her MPhil research focused on the corpus-based analysis of colligations, comparing how native English learners and non-native Pakistani learners organize grammatical categories and structural word partnerships in academic prose.",
  "To examine these patterns empirically, her thesis analyzed 800 English writing samples—comprising 400 Pakistani learner samples and 400 native-speaker samples—drawn from the International Corpus Network of Asian Learners of English (ICNALE V2.0).",
  "Her analytical workflow combined part-of-speech tagging (using TagAnt with C5 and C7 tagsets), concordance and Key-Word-in-Context (KWIC) inspection in AntConc, Contrastive Interlanguage Analysis (CIA), log-likelihood significance testing, and systematic error analysis.",
  "Alongside her corpus research, her broader scholarly and pedagogical focus spans Applied Linguistics, Corpus Linguistics, Second Language Acquisition, and English Language Teaching, with ongoing interest in pursuing doctoral research opportunities in Applied Linguistics and related fields.",
] as const;

export const ABOUT_PROFILE_SUMMARY = [
  { label: "Name", value: "Amina Mumtaz" },
  { label: "Field", value: "Applied Linguistics" },
  {
    label: "Highest listed qualification",
    value: "MPhil in Applied Linguistics",
  },
  {
    label: "University",
    value: "Government College University Faisalabad",
  },
  {
    label: "Research specialization",
    value: "Corpus Linguistics and Colligation Studies",
  },
  {
    label: "Teaching experience",
    value: "University and college-level teaching positions",
  },
  { label: "Location", value: "Shahkot, Punjab, Pakistan" },
] as const;

export const ABOUT_RESEARCH_INTERESTS: readonly AboutResearchInterestItem[] = [
  {
    id: "about-corpus-linguistics",
    title: "Corpus Linguistics",
    description:
      "Using structured electronic text collections and computational tools to uncover empirical patterns of English usage.",
    iconName: "DatabaseSearch",
  },
  {
    id: "about-colligation-learner",
    title: "Colligation and Learner Language",
    description:
      "Studying grammatical co-occurrence preferences and syntactic associations characteristic of learner English.",
    iconName: "Layers",
  },
  {
    id: "about-native-non-native",
    title: "Native and Non-Native Learner Comparison",
    description:
      "Applying contrastive interlanguage frameworks to identify structural convergences and divergences across learner groups.",
    iconName: "GitCompare",
  },
  {
    id: "about-sla",
    title: "Second Language Acquisition",
    description:
      "Exploring developmental stages, interlanguage variation, and grammatical acquisition in English as a second language.",
    iconName: "Languages",
  },
  {
    id: "about-elt",
    title: "English Language Teaching",
    description:
      "Connecting linguistic evidence with responsive university and college English language pedagogy.",
    iconName: "GraduationCap",
  },
  {
    id: "about-curriculum-design",
    title: "Curriculum Design",
    description:
      "Informing language syllabus structure and academic writing instruction through evidence of learner needs.",
    iconName: "BookOpen",
  },
];

export const ABOUT_TEACHING_INTERESTS: readonly AboutTeachingInterestItem[] = [
  {
    id: "teach-corpus-tools",
    title: "Corpus Tools",
    description:
      "Introducing students to POS tagging, concordancing, and corpus-query workflows for linguistic investigation.",
    iconName: "Terminal",
  },
  {
    id: "teach-sla",
    title: "Second Language Acquisition",
    description:
      "Teaching foundational perspectives on interlanguage development, learner variation, and L2 language learning.",
    iconName: "Languages",
  },
  {
    id: "teach-stylistics",
    title: "Stylistics",
    description:
      "Examining linguistic choices, register, and stylistic patterning across literary and non-literary English texts.",
    iconName: "Feather",
  },
  {
    id: "teach-research-methodology",
    title: "Research Methodology",
    description:
      "Guiding learners in academic inquiry design, empirical linguistic evidence gathering, and scholarly writing.",
    iconName: "Compass",
  },
];

export const SUPERVISOR_ACKNOWLEDGEMENT = {
  name: "Dr. Muhammad Imran Shah",
  department:
    "Department of Applied Linguistics, Government College University Faisalabad.",
} as const;

export interface ResearchFocusArea {
  code: "A" | "B" | "C" | "D" | "E" | "F";
  title: string;
  description: string;
}

export interface ResearchMethodologyStepItem {
  stepNumber: number;
  title: string;
  detail: string;
}

export interface ResearchToolCardItem {
  id: string;
  name: string;
  category: "Corpus" | "Software & Tagging" | "Analytical Method";
  description: string;
  iconName:
    | "Database"
    | "Tag"
    | "Search"
    | "ListFilter"
    | "AlignCenter"
    | "Braces"
    | "Binary"
    | "GitCompare"
    | "Calculator"
    | "FileWarning";
}

export interface AcademicExplorationItem {
  id: string;
  title: string;
  lens: string;
  description: string;
}

export interface ResearchProcessNode {
  id: string;
  step: string;
  label: string;
  sublabel: string;
}

export const RESEARCH_HERO_CONTENT = {
  eyebrow: "RESEARCH & EXPERTISE",
  pageTitle: "Research & Expertise",
  headline: "Exploring Language Through Corpus-Based Research",
  supportingText:
    "My research interests focus on Applied Linguistics, Corpus Linguistics, colligation patterns, learner language, and comparative analysis of native and non-native English learners.",
} as const;

export const RESEARCH_OVERVIEW_AREAS: readonly ResearchFocusArea[] = [
  {
    code: "A",
    title: "Corpus Linguistics",
    description:
      "The empirical study of authentic language use through structured collections of electronic linguistic data and quantitative observation.",
  },
  {
    code: "B",
    title: "Colligation Studies",
    description:
      "An analytical interest in how lexical items co-occur with grammatical categories and structural patterns in real discourse.",
  },
  {
    code: "C",
    title: "Learner Language Analysis",
    description:
      "Comparative investigation of Pakistani learner English and native-speaker English writing samples to understand structural usage.",
  },
  {
    code: "D",
    title: "Second Language Acquisition",
    description:
      "Academic inquiry into how second-language learners develop grammatical competence and organize interlanguage structures.",
  },
  {
    code: "E",
    title: "English Language Teaching",
    description:
      "Connecting linguistic observation and corpus insights with university- and college-level English teaching practice.",
  },
  {
    code: "F",
    title: "Curriculum Design",
    description:
      "Academic interest in educational planning and curriculum development grounded in documented learner language needs.",
  },
];

export const MPHIL_CASE_STUDY = {
  label: "MPhil Research Thesis",
  title:
    "Corpus-Based Study of Colligations: A Comparison Between Native Learners and Non-Native Learners of Pakistan",
  supervisor: "Dr. Muhammad Imran Shah",
  department:
    "Department of Applied Linguistics, Government College University Faisalabad.",
  researchFocus:
    "Comparative analysis of colligation patterns in native and Pakistani non-native learner English.",
  methodologySummary:
    "Examined 800 English writing samples (400 Pakistani learner samples and 400 native-speaker samples) from the ICNALE V2.0 corpus using TagAnt POS tagging (C5 and C7 tagsets), AntConc concordance and KWIC inspection, Contrastive Interlanguage Analysis, log-likelihood calculation, and error analysis.",
} as const;

export const CORPUS_DATASET_SUMMARY = {
  totalSamples: 800,
  pakistaniSamples: 400,
  nativeSamples: 400,
  corpusName: "ICNALE V2.0",
  explanation:
    "The MPhil research involved a comparative analysis of 800 English writing samples, divided equally between Pakistani learner samples and native-speaker samples.",
} as const;

export const RESEARCH_WORKFLOW_STEPS: readonly ResearchMethodologyStepItem[] = [
  {
    stepNumber: 1,
    title: "Corpus Selection",
    detail: "ICNALE V2.0.",
  },
  {
    stepNumber: 2,
    title: "Dataset Preparation",
    detail:
      "800 English writing samples, including 400 Pakistani and 400 native-speaker samples.",
  },
  {
    stepNumber: 3,
    title: "Part-of-Speech Tagging",
    detail: "TagAnt using C5 and C7 tagsets.",
  },
  {
    stepNumber: 4,
    title: "Corpus Analysis",
    detail: "AntConc, concordance and KWIC analysis.",
  },
  {
    stepNumber: 5,
    title: "Comparative Analysis",
    detail: "Contrastive Interlanguage Analysis.",
  },
  {
    stepNumber: 6,
    title: "Statistical Analysis",
    detail: "Log-likelihood.",
  },
  {
    stepNumber: 7,
    title: "Error Analysis",
    detail: "Error analysis as part of the research approach.",
  },
];

export const RESEARCH_TOOLS_CARDS: readonly ResearchToolCardItem[] = [
  {
    id: "tool-icnale",
    name: "ICNALE V2.0",
    category: "Corpus",
    description:
      "International Corpus Network of Asian Learners of English providing balanced Pakistani learner and native-speaker writing samples.",
    iconName: "Database",
  },
  {
    id: "tool-tagant",
    name: "TagAnt",
    category: "Software & Tagging",
    description:
      "Automated part-of-speech annotation tool applied to tag grammatical categories across all learner and native texts.",
    iconName: "Tag",
  },
  {
    id: "tool-antconc",
    name: "AntConc",
    category: "Software & Tagging",
    description:
      "Corpus linguistics concordancer used for querying tagged texts, inspecting patterns, and extracting contextual occurrences.",
    iconName: "Search",
  },
  {
    id: "tool-concordance",
    name: "Concordance Analysis",
    category: "Analytical Method",
    description:
      "Systematic review of retrieved lexical and grammatical lines to observe recurring structural behavior in context.",
    iconName: "ListFilter",
  },
  {
    id: "tool-kwic",
    name: "KWIC Analysis",
    category: "Analytical Method",
    description:
      "Key-Word-in-Context alignment examining left and right syntactic surroundings of target linguistic forms.",
    iconName: "AlignCenter",
  },
  {
    id: "tool-c5",
    name: "C5 Tagset",
    category: "Software & Tagging",
    description:
      "Standardized part-of-speech tag inventory supporting fine-grained grammatical category identification in English text.",
    iconName: "Braces",
  },
  {
    id: "tool-c7",
    name: "C7 Tagset",
    category: "Software & Tagging",
    description:
      "Extended part-of-speech tagset offering detailed syntactic and morphological distinctions for colligation analysis.",
    iconName: "Binary",
  },
  {
    id: "tool-cia",
    name: "Contrastive Interlanguage Analysis",
    category: "Analytical Method",
    description:
      "Comparative framework contrasting non-native learner English against native reference data to highlight usage differences.",
    iconName: "GitCompare",
  },
  {
    id: "tool-log-likelihood",
    name: "Log-likelihood",
    category: "Analytical Method",
    description:
      "Corpus statistical measure applied to evaluate relative frequency differences across comparative learner groups.",
    iconName: "Calculator",
  },
  {
    id: "tool-error-analysis",
    name: "Error Analysis",
    category: "Analytical Method",
    description:
      "Qualitative identification and categorization of grammatical and colligational deviations in learner writing.",
    iconName: "FileWarning",
  },
];

export const ACADEMIC_EXPLORATION_MATRIX: readonly AcademicExplorationItem[] = [
  {
    id: "exp-corpus",
    title: "Corpus Linguistics",
    lens: "Empirical Data Analysis",
    description:
      "Investigating authentic language patterns through structured text corpora and computer-assisted observation.",
  },
  {
    id: "exp-colligation",
    title: "Colligation and Learner Language",
    lens: "Lexico-Grammatical Structure",
    description:
      "Examining how second-language learners combine words with grammatical categories across written discourse.",
  },
  {
    id: "exp-comparison",
    title: "Native/Non-Native Learner Comparison",
    lens: "Contrastive Inquiry",
    description:
      "Comparing structural frequencies and syntactic preferences between Pakistani learners and native English writers.",
  },
  {
    id: "exp-sla",
    title: "Second Language Acquisition",
    lens: "Developmental Linguistics",
    description:
      "Studying interlanguage development and syntactic patterns observed in second-language English acquisition.",
  },
  {
    id: "exp-elt",
    title: "English Language Teaching",
    lens: "Pedagogical Application",
    description:
      "Bridging learner-corpus evidence with classroom practice and university English language instruction.",
  },
  {
    id: "exp-curriculum",
    title: "Curriculum Design",
    lens: "Educational Planning",
    description:
      "Exploring syllabus organization and instructional planning responsive to documented learner language needs.",
  },
];

export const RESEARCH_PROCESS_NODES: readonly ResearchProcessNode[] = [
  {
    id: "node-icnale",
    step: "01",
    label: "ICNALE V2.0",
    sublabel: "Comparative learner corpus source",
  },
  {
    id: "node-samples",
    step: "02",
    label: "Writing Samples",
    sublabel: "800 total (400 Pakistani · 400 native)",
  },
  {
    id: "node-tagant",
    step: "03",
    label: "TagAnt POS Tagging",
    sublabel: "C5 and C7 grammatical tagsets",
  },
  {
    id: "node-antconc",
    step: "04",
    label: "AntConc and KWIC Analysis",
    sublabel: "Concordance lines & contextual patterning",
  },
  {
    id: "node-cia",
    step: "05",
    label: "Comparative Interlanguage Analysis",
    sublabel: "Native vs. Pakistani learner comparison",
  },
  {
    id: "node-stats",
    step: "06",
    label: "Log-likelihood and Error Analysis",
    sublabel: "Frequency comparison & error classification",
  },
];

export const CV_RESEARCH_INTERESTS = [
  "Corpus Linguistics",
  "Colligation and learner language",
  "Native/non-native learner comparison",
  "Second Language Acquisition",
  "English Language Teaching",
  "Curriculum Design",
] as const;

export const CV_TEACHING_INTERESTS = [
  "Corpus Tools",
  "Second Language Acquisition",
  "Stylistics",
  "Research Methodology",
] as const;

export const CV_TECHNICAL_COMPETENCIES = [
  "ICNALE V2.0",
  "TagAnt POS tagging",
  "AntConc",
  "Concordance and KWIC analysis",
  "Contrastive Interlanguage Analysis",
  "Log-likelihood",
  "Error analysis",
] as const;

export const INQUIRY_TYPE_OPTIONS = [
  "Academic Collaboration",
  "Research Discussion",
  "PhD / Doctoral Research Inquiry",
  "Student Academic Inquiry",
  "Teaching & Educational Inquiry",
  "General Professional Inquiry",
] as const;

export type InquiryTypeOption = (typeof INQUIRY_TYPE_OPTIONS)[number];
