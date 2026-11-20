import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/home/HeroSection";
import { AcademicIntroSection } from "@/components/home/AcademicIntroSection";
import { ResearchInterestsSection } from "@/components/home/ResearchInterestsSection";
import { FeaturedPublicationSection } from "@/components/home/FeaturedPublicationSection";
import { ResearchMethodologySection } from "@/components/home/ResearchMethodologySection";
import { AcademicExperienceSection } from "@/components/home/AcademicExperienceSection";
import { CollaborationSection } from "@/components/home/CollaborationSection";

const HOME_TITLE = "Amina Mumtaz | Applied Linguistics Researcher";
const HOME_DESCRIPTION =
  "Explore the academic profile, research interests, publications and teaching experience of Amina Mumtaz, an Applied Linguistics researcher and university lecturer.";

export const metadata: Metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  keywords: [
    "Applied Linguistics Researcher",
    "Corpus-Based Language Analysis",
    "ICNALE V2.0",
    "English Language Teaching",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/",
          name: HOME_TITLE,
          description: HOME_DESCRIPTION,
          pageType: "WebPage",
          mainEntityPerson: true,
        })}
      />
      <HeroSection />
      <AcademicIntroSection />
      <ResearchInterestsSection />
      <FeaturedPublicationSection />
      <ResearchMethodologySection />
      <AcademicExperienceSection />
      <CollaborationSection />
    </>
  );
}
