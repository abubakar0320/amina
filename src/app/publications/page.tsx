import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpenCheck, Download } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import {
  PUBLICATIONS,
  getFeaturedPublication,
} from "@/data/publications-and-profiles";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedPublication } from "@/components/publications/FeaturedPublication";
import { PublicationCard } from "@/components/publications/PublicationCard";
import { AcademicProfilesSection } from "@/components/publications/AcademicProfilesSection";

const PUBLICATIONS_TITLE = "Research Publications | Amina Mumtaz";
const PUBLICATIONS_DESCRIPTION =
  "Discover Amina Mumtaz's published research and academic work in Applied Linguistics and Corpus Linguistics.";

export const metadata: Metadata = buildPageMetadata({
  title: PUBLICATIONS_TITLE,
  description: PUBLICATIONS_DESCRIPTION,
  path: "/publications",
  keywords: [
    "Advance Social Science Archive Journal",
    "Study of Colligation",
    "Native and Non-Native Learner Comparison",
    "Pakistani Learner English",
  ],
});

export default function PublicationsPage() {
  const featuredPublication = getFeaturedPublication();
  const verifiedCount = PUBLICATIONS.length;

  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/publications",
          name: PUBLICATIONS_TITLE,
          description: PUBLICATIONS_DESCRIPTION,
          pageType: "CollectionPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Research Publications", path: "/publications" },
          ],
        })}
      />
      {/* Publications Page Hero */}
      <section
        aria-labelledby="publications-hero-heading"
        className="border-b border-primary-navy/15 bg-soft-blue"
      >
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-editorial-up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy transition-colors hover:text-deep-navy"
            >
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 text-teal" />
              <span>Back to Home</span>
            </Link>

            <p className="text-xs font-medium text-primary-navy/80">
              {ACADEMIC_IDENTITY.fullName} &middot; Publications &amp; Profiles
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 space-y-6 animate-editorial-up">
              <Badge variant="navy" dot>
                RESEARCH &amp; SCHOLARLY WORK
              </Badge>

              <h1
                id="publications-hero-heading"
                className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-[-0.02em] text-deep-navy"
              >
                Research Publications
              </h1>

              <p className="max-w-2xl text-[0.975rem] sm:text-[1.0625rem] leading-[1.78] text-main-text/90">
                Explore my academic research and scholarly contributions in
                Applied Linguistics, Corpus Linguistics, and learner language
                analysis.
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="blue">Applied Linguistics</Badge>
                <Badge variant="teal">Corpus Linguistics</Badge>
                <Badge variant="purple">Learner Language Analysis</Badge>
              </div>

              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-1">
                <ButtonLink
                  href="#featured-publication-showcase"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  <span>Featured Publication</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-soft-blue transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </ButtonLink>

                <ButtonLink
                  href="#academic-profiles"
                  variant="outline"
                  size="lg"
                  className="border-primary-navy/25 bg-pure-white hover:bg-cool-white"
                >
                  <span>Academic Platforms</span>
                </ButtonLink>

                <ButtonLink
                  href={ACADEMIC_IDENTITY.cvPath}
                  download={ACADEMIC_IDENTITY.cvFileName}
                  variant="outline"
                  size="lg"
                  className="bg-pure-white"
                >
                  <Download aria-hidden="true" className="h-4 w-4 text-teal" />
                  <span>Download CV</span>
                </ButtonLink>
              </div>
            </div>

            {/* Verified Publication Count Panel */}
            <aside
              aria-label="Verified publication summary"
              className="lg:col-span-4 animate-portrait-reveal"
            >
              <div className="rounded-2xl border border-primary-navy bg-deep-navy p-6 sm:p-7 shadow-[var(--shadow-card)] space-y-4 text-pure-white">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-pure-white/20 bg-primary-navy text-golden-yellow">
                    <BookOpenCheck aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <Badge variant="gold">Verified Record</Badge>
                </div>

                <div>
                  <p className="font-serif text-4xl font-semibold text-pure-white">
                    {verifiedCount}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-soft-blue">
                    Verified Peer-Reviewed Publication
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-soft-blue/85">
                    Published in 2026 in{" "}
                    <span className="italic">
                      Advance Social Science Archive Journal
                    </span>
                    . Only CV-verified records appear in this portfolio.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Featured Publication Showcase */}
      {featuredPublication && (
        <section
          id="featured-publication-showcase"
          aria-labelledby="featured-publication-showcase-heading"
          className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
        >
          <Container>
            <Reveal className="space-y-10">
              <SectionHeading
                id="featured-publication-showcase-heading"
                eyebrow="Featured Scholarship"
                title="Featured Research Publication"
                description="Primary peer-reviewed journal publication verified in Amina Mumtaz's Academic Curriculum Vitae."
                accent="navy"
              />

              <FeaturedPublication publication={featuredPublication} />
            </Reveal>
          </Container>
        </section>
      )}

      {/* Scalable Publication Library */}
      <section
        id="publication-library"
        aria-labelledby="publication-library-heading"
        className="border-t border-border-subtle bg-cool-white py-16 sm:py-20 scroll-mt-20"
      >
        <Container>
          <Reveal className="space-y-10">
            <SectionHeading
              id="publication-library-heading"
              eyebrow="Scholarly Catalogue"
              title="Publication Library"
              description="Structured publication archive displaying verified peer-reviewed scholarship. Additional entries will be added as future research is published."
              accent="navy"
            />

            <div className="grid grid-cols-1 gap-6">
              {PUBLICATIONS.map((publication) => (
                <PublicationCard
                  key={publication.slug}
                  publication={publication}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Academic Profiles Section */}
      <AcademicProfilesSection />
    </>
  );
}
