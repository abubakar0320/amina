import Link from "next/link";
import { ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import { TEACHING_HERO_CONTENT } from "@/data/teaching-and-resources";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";

export function TeachingHeroSection() {
  return (
    <section
      aria-labelledby="teaching-hero-heading"
      className="relative border-b border-border-subtle bg-cool-white overflow-hidden"
    >
      {/* Desktop right-column architectural Deep Navy backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute right-0 top-0 h-full lg:w-[41%] xl:w-[43%] border-l border-primary-navy bg-deep-navy"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(231,189,85,0.18),transparent_58%)]" />
      </div>

      <Container className="relative py-12 sm:py-16 lg:py-20">
        {/* Top Breadcrumb Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-editorial-up">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-text transition-colors hover:text-primary-navy"
          >
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 text-teal" />
            <span>Back to Home</span>
          </Link>

          <p className="text-xs font-medium text-secondary-text lg:text-soft-blue/90">
            {ACADEMIC_IDENTITY.fullName} &middot;{" "}
            {TEACHING_HERO_CONTENT.pageTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 animate-editorial-up">
            <Badge variant="gold" dot>
              {TEACHING_HERO_CONTENT.eyebrow}
            </Badge>

            <div className="space-y-4">
              <h1
                id="teaching-hero-heading"
                className="font-serif text-[2rem] sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-[-0.02em] text-deep-navy"
              >
                {TEACHING_HERO_CONTENT.headline}
              </h1>

              <p className="border-l-[3px] border-golden-yellow pl-4 text-sm sm:text-base font-medium text-primary-navy">
                {TEACHING_HERO_CONTENT.designation}
              </p>
            </div>

            <p className="max-w-2xl text-[0.975rem] sm:text-[1.0625rem] leading-[1.78] text-main-text/90">
              {TEACHING_HERO_CONTENT.supportingDescription}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-1">
              <ButtonLink
                href="#teaching-interests"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Explore Teaching Interests</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-soft-blue transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </ButtonLink>

              <ButtonLink href="/about" variant="gold" size="lg">
                <UserRound aria-hidden="true" className="h-4 w-4 text-deep-navy" />
                <span>Academic Profile</span>
              </ButtonLink>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <div className="lg:col-span-5">
            <PortraitPlaceholder />
          </div>
        </div>
      </Container>
    </section>
  );
}
