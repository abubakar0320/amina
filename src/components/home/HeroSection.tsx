import { ArrowRight, Download, MapPin } from "lucide-react";
import {
  ACADEMIC_IDENTITY,
  HERO_HIGHLIGHTS,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative border-b border-border-subtle bg-pure-white overflow-hidden"
    >
      {/* Desktop right-column Deep Navy & subtle radial Soft Blue architectural surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute right-0 top-0 h-full lg:w-[41%] xl:w-[43%] bg-deep-navy border-l border-primary-navy"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,140,135,0.22),transparent_58%)]" />
      </div>

      <Container className="relative py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Heading -> Name & Intro -> CTAs -> Supporting Snapshot */}
          <div className="lg:col-span-7 space-y-6 animate-editorial-up">
            {/* Introductory Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-navy/20 bg-soft-blue px-3.5 py-1.5 text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-[0.14em] text-primary-navy">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-teal"
              />
              <span>{ACADEMIC_IDENTITY.heroEyebrow}</span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.375rem] xl:text-[3.625rem] font-semibold leading-[1.1] tracking-[-0.02em] text-deep-navy"
              >
                {ACADEMIC_IDENTITY.heroHeadlineLine1}
                <br />
                <span className="text-primary-navy">
                  {ACADEMIC_IDENTITY.heroHeadlineLine2}
                </span>
              </h1>

              {/* Name & Professional Designation */}
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
                <p className="text-sm sm:text-base font-medium text-secondary-text">
                  {ACADEMIC_IDENTITY.designation}
                </p>
              </div>
            </div>

            {/* Hero Academic Summary */}
            <p className="max-w-2xl text-[0.975rem] sm:text-[1.0625rem] leading-[1.75] text-main-text/90">
              {ACADEMIC_IDENTITY.heroSummary}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-1">
              <ButtonLink
                href="#research-interests"
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Explore My Research</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 text-soft-blue transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </ButtonLink>

              <ButtonLink
                href={ACADEMIC_IDENTITY.cvPath}
                download={ACADEMIC_IDENTITY.cvFileName}
                variant="secondary"
                size="lg"
              >
                <Download aria-hidden="true" className="h-4 w-4 text-primary-navy" />
                <span>Download Academic CV</span>
              </ButtonLink>
            </div>

            {/* Supporting Location Detail */}
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-secondary-text">
              <MapPin aria-hidden="true" className="h-4 w-4 text-teal" />
              <span>{ACADEMIC_IDENTITY.regionSummary}</span>
            </p>

            {/* Verified Academic Snapshot Triad */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-border-subtle">
              {HERO_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border-subtle bg-soft-blue/45 px-4 py-3.5 shadow-2xs transition-colors duration-200 hover:border-primary-navy/40 hover:bg-soft-blue/75"
                >
                  <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-deep-navy">
                    {item.value}
                  </dd>
                  <dd className="mt-0.5 text-xs text-secondary-text">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right Side: Sophisticated Academic Portrait Container */}
          <div className="lg:col-span-5">
            <PortraitPlaceholder />
          </div>
        </div>
      </Container>
    </section>
  );
}
