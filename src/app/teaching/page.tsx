import type { Metadata } from "next";
import {
  ACADEMIC_RESOURCES,
  RESOURCE_CATEGORIES,
  TEACHING_SUBJECT_INTERESTS,
  TOOLS_FOR_LINGUISTIC_EXPLORATION,
  VERIFIED_TEACHING_POSITIONS,
} from "@/data/teaching-and-resources";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TeachingHeroSection } from "@/components/teaching/TeachingHeroSection";
import { TeachingExperienceCard } from "@/components/teaching/TeachingExperienceCard";
import { TeachingInterestCard } from "@/components/teaching/TeachingInterestCard";
import { ResourceLibrary } from "@/components/teaching/ResourceLibrary";
import { AcademicToolsCard } from "@/components/teaching/AcademicToolsCard";
import { TeachingPhilosophySection } from "@/components/teaching/TeachingPhilosophySection";
import { TeachingEngagementSection } from "@/components/teaching/TeachingEngagementSection";

const TEACHING_TITLE = "Teaching & Academic Interests | Amina Mumtaz";
const TEACHING_DESCRIPTION =
  "Explore Amina Mumtaz's teaching experience and academic interests in Corpus Tools, Stylistics, Second Language Acquisition and Research Methodology.";

export const metadata: Metadata = buildPageMetadata({
  title: TEACHING_TITLE,
  description: TEACHING_DESCRIPTION,
  path: "/teaching",
  keywords: [
    "Corpus Tools in Teaching",
    "Stylistics",
    "Research Methodology in Applied Linguistics",
    "University English Lecturer Pakistan",
  ],
});

export default function TeachingPage() {
  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/teaching",
          name: TEACHING_TITLE,
          description: TEACHING_DESCRIPTION,
          pageType: "WebPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Teaching & Academic Interests", path: "/teaching" },
          ],
        })}
      />
      <TeachingHeroSection />

      {/* Section 3: Academic Teaching Experience */}
      <section
        id="teaching-experience"
        aria-labelledby="teaching-experience-heading"
        className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
      >
        <Container>
          <Reveal className="space-y-10 sm:space-y-12">
            <SectionHeading
              id="teaching-experience-heading"
              eyebrow="Institutional Appointments"
              title="Academic Teaching Experience"
              description="Verified university and college teaching roles documented in Amina Mumtaz's Academic Curriculum Vitae."
              accent="gold"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {VERIFIED_TEACHING_POSITIONS.map((position, index) => (
                <TeachingExperienceCard
                  key={position.id}
                  position={position}
                  featured={index === 0}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Section 4: Subjects & Teaching Interests */}
      <section
        id="teaching-interests"
        aria-labelledby="teaching-interests-heading"
        className="border-y border-golden-yellow/40 bg-soft-gold/75 py-16 sm:py-20 lg:py-24 scroll-mt-20"
      >
        <Container>
          <Reveal className="space-y-10 sm:space-y-12">
            <SectionHeading
              id="teaching-interests-heading"
              eyebrow="Academic Specializations"
              title="Subjects & Teaching Interests"
              description="Documented areas of academic teaching interest across linguistic analysis, language acquisition, stylistics, and scholarly inquiry."
              accent="gold"
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEACHING_SUBJECT_INTERESTS.map((item) => (
                <TeachingInterestCard key={item.id} item={item} />
              ))}
            </div>

            <p className="text-xs leading-relaxed text-main-text/80">
              Note: These areas reflect documented teaching interests from the
              Curriculum Vitae rather than an exhaustive catalogue of assigned
              university courses.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Section 5: Teaching Philosophy */}
      <TeachingPhilosophySection />

      {/* Section 6 & 9: Academic Learning & Research Resources */}
      <section
        id="learning-resources"
        aria-labelledby="learning-resources-heading"
        className="border-y border-purple/20 bg-soft-purple/80 py-16 sm:py-20 lg:py-24 scroll-mt-20"
      >
        <Container>
          <Reveal className="space-y-10 sm:space-y-12">
            <SectionHeading
              id="learning-resources-heading"
              eyebrow="Educational Knowledge Sharing"
              title="Academic Learning & Research Resources"
              description="Structured category architecture prepared for future academic study notes, reading guides, and corpus exploration materials."
              accent="purple"
            />

            <ResourceLibrary
              categories={RESOURCE_CATEGORIES}
              resources={ACADEMIC_RESOURCES}
              emptyMessage="Academic resources will be added here as they become available."
            />
          </Reveal>
        </Container>
      </section>

      {/* Section 7: Tools for Linguistic Exploration */}
      <section
        id="linguistic-tools"
        aria-labelledby="linguistic-tools-heading"
        className="bg-cool-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
      >
        <Container>
          <Reveal className="space-y-10 sm:space-y-12">
            <SectionHeading
              id="linguistic-tools-heading"
              eyebrow="Methodological Context"
              title="Tools for Linguistic Exploration"
              description="Corpus tools, tagged datasets, and analytical frameworks documented in Amina Mumtaz's research profile and relevant to language inquiry."
              accent="teal"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TOOLS_FOR_LINGUISTIC_EXPLORATION.map((tool) => (
                <AcademicToolsCard key={tool.id} tool={tool} />
              ))}
            </div>

            <p className="text-xs leading-relaxed text-secondary-text">
              Note: Tools and analytical frameworks shown above reflect
              research experience in Applied Linguistics rather than certified
              training programmes or official university courses.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Section 8: Student & Academic Engagement */}
      <TeachingEngagementSection />
    </>
  );
}
