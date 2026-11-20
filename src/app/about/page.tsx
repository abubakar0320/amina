import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { BiographyAndSummarySection } from "@/components/about/BiographyAndSummarySection";
import { AcademicBackgroundSection } from "@/components/about/AcademicBackgroundSection";
import { AboutExperienceSection } from "@/components/about/AboutExperienceSection";
import { AboutInterestsSection } from "@/components/about/AboutInterestsSection";
import { EngagementAndSupervisorSection } from "@/components/about/EngagementAndSupervisorSection";
import { AboutConnectSection } from "@/components/about/AboutConnectSection";

const ABOUT_TITLE = "About Amina Mumtaz | Academic Profile";
const ABOUT_DESCRIPTION =
  "Learn about Amina Mumtaz's academic background, MPhil in Applied Linguistics, educational qualifications and teaching experience.";

export const metadata: Metadata = buildPageMetadata({
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  path: "/about",
  openGraphType: "profile",
  keywords: [
    "MPhil Applied Linguistics GCUF",
    "University Lecturer Pakistan",
    "Educational Qualifications",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/about",
          name: ABOUT_TITLE,
          description: ABOUT_DESCRIPTION,
          pageType: "ProfilePage",
          mainEntityPerson: true,
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ],
        })}
      />
      <AboutHeroSection />
      <BiographyAndSummarySection />
      <AcademicBackgroundSection />
      <AboutExperienceSection />
      <AboutInterestsSection />
      <EngagementAndSupervisorSection />
      <AboutConnectSection />
    </>
  );
}
