import Link from "next/link";
import { ArrowDown, ArrowLeft, Download } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { PrintCVButton } from "@/components/cv/PrintCVButton";

export function AcademicCVHeader() {
  return (
    <section
      aria-labelledby="cv-hero-heading"
      className="no-print border-b border-border-subtle bg-soft-blue/70"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Top Breadcrumb Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-editorial-up">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy transition-colors hover:text-deep-navy"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 text-teal" />
            <span>Back to Home</span>
          </Link>

          <p className="text-xs font-medium text-primary-navy/85">
            {ACADEMIC_IDENTITY.fullName} &middot; Academic Curriculum Vitae
          </p>
        </div>

        <div className="max-w-4xl space-y-6 animate-editorial-up">
          <Badge variant="navy" dot>
            ACADEMIC CURRICULUM VITAE
          </Badge>

          <div className="space-y-3">
            <h1
              id="cv-hero-heading"
              className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-[-0.02em] text-deep-navy"
            >
              Academic Curriculum Vitae
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-l-[3px] border-teal pl-4">
              <p className="font-serif text-xl sm:text-2xl font-semibold text-deep-navy">
                {ACADEMIC_IDENTITY.fullName}
              </p>
              <span
                aria-hidden="true"
                className="hidden sm:inline-block text-teal"
              >
                &bull;
              </span>
              <p className="text-sm sm:text-base font-medium text-main-text/85">
                {ACADEMIC_IDENTITY.designation}
              </p>
            </div>
          </div>

          <p className="max-w-2xl text-[0.975rem] sm:text-[1.0625rem] leading-[1.78] text-main-text/90">
            Explore my academic background, research experience, teaching
            positions, scholarly publication, and technical competencies.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-1">
            <ButtonLink
              href={ACADEMIC_IDENTITY.cvPath}
              download={ACADEMIC_IDENTITY.cvFileName}
              variant="primary"
              size="lg"
            >
              <Download
                aria-hidden="true"
                className="h-4 w-4 text-soft-blue"
              />
              <span>Download Academic CV</span>
            </ButtonLink>

            <ButtonLink
              href="#online-cv"
              variant="outline"
              size="lg"
              className="border-primary-navy/25 bg-pure-white hover:bg-cool-white"
            >
              <span>View Online CV</span>
              <ArrowDown aria-hidden="true" className="h-4 w-4 text-teal" />
            </ButtonLink>

            <PrintCVButton
              variant="outline"
              size="lg"
              className="border-primary-navy/25 bg-pure-white hover:bg-cool-white"
            />
          </div>

          <p className="text-xs leading-relaxed text-main-text/80">
            &ldquo;Download Academic CV&rdquo; provides the original verified
            PDF document (
            <span className="font-medium text-deep-navy">
              {ACADEMIC_IDENTITY.cvFileName}
            </span>
            ); &ldquo;Print CV&rdquo; formats the online CV below for browser
            printing or Save-as-PDF export.
          </p>
        </div>
      </Container>
    </section>
  );
}
