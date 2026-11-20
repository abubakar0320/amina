import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  FlaskConical,
  UserCheck,
} from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import type { ScholarlyPublication } from "@/data/publications-and-profiles";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { PublicationMetadata } from "@/components/publications/PublicationMetadata";
import { ExternalAcademicLink } from "@/components/publications/ExternalAcademicLink";

export interface PublicationDetailLayoutProps {
  publication: ScholarlyPublication;
}

export function PublicationDetailLayout({
  publication,
}: PublicationDetailLayoutProps) {
  return (
    <div className="bg-pure-white">
      {/* Publication Detail Hero */}
      <section className="border-b border-primary-navy/15 bg-soft-blue py-12 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy transition-colors hover:text-deep-navy"
            >
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 text-teal" />
              <span>Back to Publications</span>
            </Link>

            <span className="text-xs font-medium text-primary-navy/85">
              Published {publication.publishedDate}
            </span>
          </div>

          <div className="max-w-4xl space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="navy">{publication.type}</Badge>
              <Badge variant="teal" dot>
                {publication.category}
              </Badge>
              <Badge variant="gold">{publication.year}</Badge>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-[2.625rem] font-semibold leading-[1.18] tracking-[-0.015em] text-deep-navy">
              {publication.title}
            </h1>

            <p className="text-base sm:text-lg text-main-text/90">
              <span className="font-semibold text-deep-navy">
                {publication.authors.join(", ")}
              </span>{" "}
              &middot; <span className="italic">{publication.journal}</span>,
              Volume {publication.volume}, Issue {publication.issue}, pp.{" "}
              {publication.pages}.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              {publication.externalUrl && (
                <ExternalAcademicLink
                  href={publication.externalUrl}
                  label="View Published Article"
                  ariaLabel={`View full published article: ${publication.title}`}
                  variant="primary"
                  size="lg"
                />
              )}

              <ButtonLink
                href={ACADEMIC_IDENTITY.cvPath}
                download={ACADEMIC_IDENTITY.cvFileName}
                variant="outline"
                size="lg"
                className="border-primary-navy/25 bg-pure-white hover:bg-cool-white"
              >
                <Download aria-hidden="true" className="h-4 w-4 text-primary-navy" />
                <span>Download Academic CV</span>
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content & Metadata */}
      <section className="py-12 sm:py-16 lg:py-20 bg-cool-white/55">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Left Main Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Research Overview */}
              <Card as="section" surface="white" className="p-6 sm:p-8 space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-deep-navy">
                  Research Overview
                </h2>

                <div className="space-y-4 text-[0.975rem] sm:text-base leading-[1.78] text-secondary-text">
                  {publication.overviewNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>

                <div className="rounded-xl border border-primary-navy/15 bg-soft-blue/60 p-4">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy mb-1">
                    Verified Bibliographic Citation
                  </p>
                  <p className="text-sm leading-relaxed text-deep-navy">
                    {publication.citation}
                  </p>
                </div>
              </Card>

              {/* Research Methodology */}
              <Card as="section" surface="white" accentTop accentTone="teal" className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal/30 bg-soft-teal text-teal">
                    <FlaskConical aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-deep-navy">
                      Research Methodology
                    </h2>
                    <p className="text-xs text-secondary-text">
                      Documented learner-corpus tools and analytical techniques
                    </p>
                  </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {publication.methodologyItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-teal/20 bg-soft-teal/45 px-4 py-3 text-sm font-medium text-deep-navy"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-teal"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* External Publication Link Box (Navy Banner) */}
              {publication.externalUrl && (
                <Card
                  as="section"
                  surface="navy"
                  accentTop
                  accentTone="terracotta"
                  className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
                >
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-golden-yellow">
                      Official Journal Record
                    </p>
                    <h2 className="font-serif text-lg sm:text-xl font-semibold text-pure-white">
                      Read Full Article on {publication.journal}
                    </h2>
                    <p className="text-xs text-soft-blue/85 break-all">
                      {publication.externalUrl}
                    </p>
                  </div>

                  <ExternalAcademicLink
                    href={publication.externalUrl}
                    label="Open Journal Article"
                    ariaLabel={`Open published article at ${publication.journal}`}
                    variant="terracotta"
                    size="md"
                    className="shrink-0"
                  />
                </Card>
              )}
            </div>

            {/* Right Sidebar: Publication Info + Supervisor Acknowledgement */}
            <aside className="lg:col-span-4 space-y-6">
              <Card surface="white" accentTop accentTone="navy">
                <CardHeader className="border-b border-border-subtle pb-4">
                  <h2 className="font-serif text-lg sm:text-xl font-semibold text-deep-navy">
                    Publication Information
                  </h2>
                  <p className="text-xs text-secondary-text">
                    Verified bibliographic record
                  </p>
                </CardHeader>
                <CardBody className="py-5">
                  <PublicationMetadata publication={publication} variant="sidebar" />
                </CardBody>
              </Card>

              <Card surface="purple" accentTop accentTone="purple">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple/30 bg-pure-white text-purple">
                      <UserCheck aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                        Acknowledgement
                      </p>
                      <h2 className="font-serif text-base font-semibold text-deep-navy">
                        Research Supervision
                      </h2>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="pt-2 pb-6 space-y-1">
                  <p className="text-sm font-semibold text-deep-navy">
                    {publication.supervisorAcknowledgement.name}
                  </p>
                  <p className="text-xs leading-relaxed text-main-text/85">
                    {publication.supervisorAcknowledgement.department}
                  </p>
                </CardBody>
              </Card>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
