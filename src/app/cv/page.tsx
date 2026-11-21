import type { Metadata } from "next";
import { Download, Mail, MapPin, Phone, UserCheck } from "lucide-react";
import {
  ACADEMIC_IDENTITY,
  ACADEMIC_REFERENCE,
  CV_RESEARCH_INTERESTS,
  CV_TEACHING_INTERESTS,
  CV_TECHNICAL_COMPETENCIES,
} from "@/data/academic-profile";
import { getFeaturedPublication } from "@/data/publications-and-profiles";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AcademicCVHeader } from "@/components/cv/AcademicCVHeader";
import { AcademicCVSection } from "@/components/cv/AcademicCVSection";
import { EducationTimeline } from "@/components/cv/EducationTimeline";
import { PublicationCVItem } from "@/components/cv/PublicationCVItem";
import { ResearchExperience } from "@/components/cv/ResearchExperience";
import { TeachingExperience } from "@/components/cv/TeachingExperience";
import { PrintCVButton } from "@/components/cv/PrintCVButton";

const CV_TITLE = "Academic CV | Amina Mumtaz";
const CV_DESCRIPTION =
  "View the academic curriculum vitae of Amina Mumtaz, including qualifications, research experience, publication and teaching background.";

export const metadata: Metadata = buildPageMetadata({
  title: CV_TITLE,
  description: CV_DESCRIPTION,
  path: "/cv",
  openGraphType: "profile",
  keywords: [
    "Amina Mumtaz Curriculum Vitae",
    "Applied Linguistics CV",
    "MPhil Applied Linguistics GCUF",
    "Corpus Linguistics Researcher CV",
  ],
});

export default function AcademicCVPage() {
  const featuredPublication = getFeaturedPublication();

  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/cv",
          name: CV_TITLE,
          description: CV_DESCRIPTION,
          pageType: "ProfilePage",
          mainEntityPerson: true,
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Academic CV", path: "/cv" },
          ],
        })}
      />
      <AcademicCVHeader />

      {/* Online Academic CV Sheet */}
      <section
        id="online-cv"
        aria-label="Formatted Online Curriculum Vitae"
        className="bg-cool-white py-12 sm:py-16 lg:py-20 scroll-mt-20"
      >
        <Container size="narrow">
          <Card
            surface="white"
            accentTop
            accentTone="navy"
            className="cv-print-sheet p-6 sm:p-10 lg:p-12 space-y-8"
          >
            {/* CV Document Header & Personal Contact Details */}
            <header className="cv-print-section border-b border-border-subtle pb-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-primary-navy">
                    Curriculum Vitae
                  </p>
                  <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-deep-navy">
                    {ACADEMIC_IDENTITY.fullName}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-secondary-text">
                    {ACADEMIC_IDENTITY.specializationHeadline}
                  </p>
                </div>

                <div className="no-print flex flex-wrap gap-2.5">
                  <ButtonLink
                    href={ACADEMIC_IDENTITY.cvPath}
                    download={ACADEMIC_IDENTITY.cvFileName}
                    variant="secondary"
                    size="sm"
                  >
                    <Download aria-hidden="true" className="h-3.5 w-3.5" />
                    <span>PDF</span>
                  </ButtonLink>
                  <PrintCVButton variant="outline" size="sm" />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-sm text-secondary-text">
                <span className="inline-flex items-center gap-2 text-deep-navy">
                  <MapPin
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-teal"
                  />
                  <span>{ACADEMIC_IDENTITY.location}</span>
                </span>

                <a
                  href={`mailto:${ACADEMIC_IDENTITY.email}`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg px-1.5 py-1.5 text-deep-navy transition-colors hover:bg-soft-blue hover:underline decoration-primary-navy underline-offset-4"
                >
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-teal"
                  />
                  <span>{ACADEMIC_IDENTITY.email}</span>
                </a>

                <a
                  href={ACADEMIC_IDENTITY.phoneHref}
                  className="inline-flex min-h-10 items-center gap-2 rounded-lg px-1.5 py-1.5 text-deep-navy transition-colors hover:bg-soft-blue hover:underline decoration-primary-navy underline-offset-4"
                >
                  <Phone
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-teal"
                  />
                  <span>{ACADEMIC_IDENTITY.phone}</span>
                </a>
              </div>
            </header>

            {/* 1. Academic / Professional Profile */}
            <AcademicCVSection id="cv-profile" title="Academic Profile">
              <p className="text-[0.975rem] sm:text-base leading-[1.78] text-secondary-text">
                {ACADEMIC_IDENTITY.profileSummary}
              </p>
            </AcademicCVSection>

            {/* 2. Educational Qualifications */}
            <AcademicCVSection id="cv-education" title="Education">
              <EducationTimeline />
            </AcademicCVSection>

            {/* 3. Research Publication */}
            {featuredPublication && (
              <AcademicCVSection
                id="cv-publication"
                title="Research Publication"
              >
                <PublicationCVItem publication={featuredPublication} />
              </AcademicCVSection>
            )}

            {/* 4. MPhil Thesis & Research Experience */}
            <AcademicCVSection
              id="cv-research-experience"
              title="MPhil Thesis & Research Experience"
            >
              <ResearchExperience />
            </AcademicCVSection>

            {/* 5. Teaching Experience */}
            <AcademicCVSection
              id="cv-teaching-experience"
              title="Teaching Experience"
            >
              <TeachingExperience />
            </AcademicCVSection>

            {/* 6. Research & Teaching Interests */}
            <AcademicCVSection
              id="cv-interests"
              title="Research and Teaching Interests"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-xl border border-teal/25 bg-soft-teal/45 p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-deep-navy">
                    Research Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CV_RESEARCH_INTERESTS.map((item) => (
                      <Badge key={item} variant="teal">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-[#B88316]/65 bg-soft-gold/75 p-4 sm:p-5 space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-deep-navy">
                    Teaching Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {CV_TEACHING_INTERESTS.map((item) => (
                      <Badge key={item} variant="gold">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AcademicCVSection>

            {/* 7. Research Methods & Technical Competencies */}
            <AcademicCVSection
              id="cv-competencies"
              title="Research Methods & Technical Competencies"
            >
              <div className="flex flex-wrap gap-2">
                {CV_TECHNICAL_COMPETENCIES.map((skill) => (
                  <Badge
                    key={skill}
                    variant="blue"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </AcademicCVSection>

            {/* 8. Academic Reference */}
            <AcademicCVSection id="cv-reference" title="Academic Reference">
              <div className="rounded-xl border border-purple/25 bg-soft-purple/45 p-4 sm:p-5 flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple/30 bg-pure-white text-purple">
                  <UserCheck aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="space-y-0.5">
                  <p className="font-serif text-base sm:text-lg font-semibold text-deep-navy">
                    {ACADEMIC_REFERENCE.name}
                  </p>
                  <p className="text-sm font-medium text-primary-navy">
                    MPhil Supervisor
                  </p>
                  <p className="text-xs sm:text-sm text-main-text/85">
                    Department of Applied Linguistics, GCUF.
                  </p>
                </div>
              </div>
            </AcademicCVSection>
          </Card>

          {/* Bottom Action Bar (hidden when printing) */}
          <div className="no-print mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-primary-navy bg-deep-navy px-6 py-5 text-pure-white shadow-[var(--shadow-card)]">
            <p className="text-sm font-medium text-pure-white text-center sm:text-left">
              Need to discuss doctoral research, teaching, or academic
              collaboration?
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="terracotta" size="md">
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 text-soft-gold"
                />
                <span>Contact Amina</span>
              </ButtonLink>
              <ButtonLink
                href={ACADEMIC_IDENTITY.cvPath}
                download={ACADEMIC_IDENTITY.cvFileName}
                variant="outlineOnDark"
                size="md"
              >
                <Download aria-hidden="true" className="h-4 w-4 text-golden-yellow" />
                <span>Original CV PDF</span>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
