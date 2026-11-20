import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Database,
  FileSearch,
  Tag,
} from "lucide-react";
import {
  ACADEMIC_IDENTITY,
  RESEARCH_HERO_CONTENT,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

const SNAPSHOT_ITEMS = [
  {
    icon: Database,
    label: "Primary Corpus",
    value: "ICNALE V2.0 (800 Writing Samples)",
  },
  {
    icon: Tag,
    label: "Tagging & Software",
    value: "TagAnt (C5 & C7 Tagsets) · AntConc",
  },
  {
    icon: FileSearch,
    label: "Analytical Methods",
    value: "KWIC · CIA · Log-likelihood · Error Analysis",
  },
  {
    icon: BookOpenCheck,
    label: "Published Work",
    value: "2026 Peer-Reviewed Article (ASSA Journal)",
  },
] as const;

export function ResearchHeroSection() {
  return (
    <section
      aria-labelledby="research-hero-heading"
      className="relative border-b border-teal/20 bg-soft-teal overflow-hidden"
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

          <p className="text-xs font-medium text-main-text/80">
            {ACADEMIC_IDENTITY.fullName} &middot; {RESEARCH_HERO_CONTENT.pageTitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Research Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 animate-editorial-up">
            <Badge variant="teal" dot>
              {RESEARCH_HERO_CONTENT.eyebrow}
            </Badge>

            <h1
              id="research-hero-heading"
              className="font-serif text-[2rem] sm:text-4xl lg:text-[3.125rem] font-semibold leading-[1.13] tracking-[-0.02em] text-deep-navy"
            >
              {RESEARCH_HERO_CONTENT.headline}
            </h1>

            <p className="max-w-2xl text-[0.975rem] sm:text-[1.0625rem] leading-[1.78] text-main-text/90">
              {RESEARCH_HERO_CONTENT.supportingText}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 pt-1">
              <ButtonLink
                href="#research-focus"
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
                href="/cv"
                variant="outline"
                size="lg"
                className="group border-teal/40 bg-pure-white hover:bg-cool-white"
              >
                <span>View Academic CV</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 text-teal transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </ButtonLink>
            </div>
          </div>

          {/* Right Column: Subtle Research Profile Snapshot */}
          <aside
            aria-label="Research profile at a glance"
            className="lg:col-span-5 animate-portrait-reveal"
          >
            <Card
              surface="white"
              accentTop
              accentTone="teal"
              className="overflow-hidden border-teal/25"
            >
              <CardHeader className="border-b border-border-subtle pb-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary-navy">
                  Research Profile Snapshot
                </p>
                <h2 className="mt-1 font-serif text-xl font-semibold text-deep-navy">
                  Documented Corpus &amp; Analytical Scope
                </h2>
              </CardHeader>

              <CardBody className="py-5 space-y-3.5">
                {SNAPSHOT_ITEMS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3.5 rounded-xl border border-teal/20 bg-soft-teal/45 p-3.5"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-teal/30 bg-pure-white text-teal">
                        <IconComponent aria-hidden="true" className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-primary-navy/85">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-deep-navy">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardBody>
            </Card>
          </aside>
        </div>
      </Container>
    </section>
  );
}
