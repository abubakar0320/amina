import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResearchHeroSection } from "@/components/research/ResearchHeroSection";
import { ResearchFocusSection } from "@/components/research/ResearchFocusSection";
import { MPhilThesisCaseStudySection } from "@/components/research/MPhilThesisCaseStudySection";
import { CorpusDatasetSection } from "@/components/research/CorpusDatasetSection";
import { ResearchMethodologyWorkflowSection } from "@/components/research/ResearchMethodologyWorkflowSection";
import { ResearchToolsSection } from "@/components/research/ResearchToolsSection";
import { ResearchInterestsMatrixSection } from "@/components/research/ResearchInterestsMatrixSection";
import { ResearchProcessVisualizationSection } from "@/components/research/ResearchProcessVisualizationSection";
import { ResearchCollaborationSection } from "@/components/research/ResearchCollaborationSection";

const RESEARCH_TITLE = "Research & Expertise | Amina Mumtaz";
const RESEARCH_DESCRIPTION =
  "Explore Amina Mumtaz's research interests in Corpus Linguistics, colligation, learner language analysis and Second Language Acquisition.";

export const metadata: Metadata = buildPageMetadata({
  title: RESEARCH_TITLE,
  description: RESEARCH_DESCRIPTION,
  path: "/research",
  keywords: [
    "Learner Corpus Research",
    "Second Language Acquisition",
    "Native and Non-Native Learner Comparison",
    "Pakistani Learner English",
    "Corpus-Based Language Analysis",
    "TagAnt POS Tagging",
    "AntConc",
    "Contrastive Interlanguage Analysis",
  ],
});

export default function ResearchPage() {
  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/research",
          name: RESEARCH_TITLE,
          description: RESEARCH_DESCRIPTION,
          pageType: "WebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Research & Expertise", path: "/research" },
          ],
        })}
      />
      <ResearchHeroSection />
      <ResearchFocusSection />
      <MPhilThesisCaseStudySection />
      <CorpusDatasetSection />
      <ResearchMethodologyWorkflowSection />
      <ResearchToolsSection />
      <ResearchInterestsMatrixSection />
      <ResearchProcessVisualizationSection />
      <ResearchCollaborationSection />
    </>
  );
}
