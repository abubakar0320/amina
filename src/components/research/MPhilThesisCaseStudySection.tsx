import {
  ArrowRight,
  BookMarked,
  Building2,
  Compass,
  UserCheck,
} from "lucide-react";
import { MPHIL_CASE_STUDY } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function MPhilThesisCaseStudySection() {
  return (
    <section
      id="mphil-thesis"
      aria-labelledby="mphil-thesis-heading"
      className="border-y border-purple/20 bg-soft-purple/75 py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal>
          <Card
            surface="white"
            accentTop
            accentTone="purple"
            className="overflow-hidden border-purple/25"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Main Thesis Case Study */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Badge variant="purple" dot>
                      {MPHIL_CASE_STUDY.label}
                    </Badge>
                    <Badge variant="blue">Graduate Corpus Study</Badge>
                  </div>

                  <h2
                    id="mphil-thesis-heading"
                    className="font-serif text-2xl sm:text-3xl lg:text-[2.125rem] font-semibold leading-[1.2] tracking-[-0.015em] text-deep-navy"
                  >
                    {MPHIL_CASE_STUDY.title}
                  </h2>
                </CardHeader>

                <CardBody className="space-y-6 pb-8">
                  {/* Soft-Purple Highlighted Metadata */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-purple/20 bg-soft-purple/60 p-5">
                    <div className="flex items-start gap-3">
                      <UserCheck
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-purple"
                      />
                      <div>
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                          Research Supervisor
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-deep-navy">
                          {MPHIL_CASE_STUDY.supervisor}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Building2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-purple"
                      />
                      <div>
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                          Department &amp; University
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-deep-navy">
                          {MPHIL_CASE_STUDY.department}
                        </p>
                      </div>
                    </div>

                    <div className="sm:col-span-2 flex items-start gap-3 border-t border-purple/15 pt-3.5">
                      <Compass
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-purple"
                      />
                      <div>
                        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                          Research Focus
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-deep-navy">
                          {MPHIL_CASE_STUDY.researchFocus}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Methodology Summary */}
                  <div className="space-y-2">
                    <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-deep-navy">
                      <BookMarked
                        aria-hidden="true"
                        className="h-4 w-4 text-teal"
                      />
                      <span>Documented Methodology Summary</span>
                    </h3>
                    <p className="text-sm sm:text-[0.975rem] leading-[1.75] text-secondary-text">
                      {MPHIL_CASE_STUDY.methodologySummary}
                    </p>
                  </div>
                </CardBody>
              </div>

              {/* Dedicated Thesis Architecture Diagram Panel (White/Navy + Teal) */}
              <aside
                aria-label="MPhil thesis comparative architecture diagram"
                className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border-subtle bg-cool-white p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div className="space-y-1.5">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary-navy">
                    Comparative Research Design
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-deep-navy">
                    Thesis Structural Overview
                  </h3>
                </div>

                {/* Accessible Diagram */}
                <div className="space-y-3" role="group" aria-label="Comparative thesis architecture">
                  {/* Source Corpus Node */}
                  <div className="rounded-xl border border-primary-navy bg-deep-navy p-4 text-center shadow-2xs text-pure-white">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-golden-yellow">
                      Reference Corpus
                    </p>
                    <p className="mt-0.5 font-serif text-base font-semibold text-pure-white">
                      ICNALE V2.0 (800 Writing Samples)
                    </p>
                  </div>

                  <div className="flex justify-center" aria-hidden="true">
                    <span className="h-5 w-[2px] bg-teal" />
                  </div>

                  {/* Two Comparative Groups */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-primary-navy/25 bg-soft-blue p-3.5 text-center">
                      <p className="font-serif text-lg font-semibold text-deep-navy">
                        400
                      </p>
                      <p className="text-xs font-medium text-deep-navy">
                        Pakistani Learners
                      </p>
                      <p className="mt-0.5 text-[0.6875rem] text-primary-navy/85">
                        Non-native group
                      </p>
                    </div>

                    <div className="rounded-xl border border-teal/35 bg-soft-teal p-3.5 text-center">
                      <p className="font-serif text-lg font-semibold text-deep-navy">
                        400
                      </p>
                      <p className="text-xs font-medium text-deep-navy">
                        Native Speakers
                      </p>
                      <p className="mt-0.5 text-[0.6875rem] text-primary-navy/85">
                        Reference group
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center" aria-hidden="true">
                    <span className="h-5 w-[2px] bg-teal" />
                  </div>

                  {/* Analytical Layer */}
                  <div className="rounded-xl border border-border-subtle bg-pure-white p-4 space-y-2 shadow-2xs">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy text-center">
                      Colligation &amp; Interlanguage Analysis
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium text-deep-navy">
                      <span className="rounded-md bg-soft-blue px-2 py-0.5 border border-primary-navy/20">
                        TagAnt (C5 &amp; C7)
                      </span>
                      <ArrowRight aria-hidden="true" className="h-3 w-3 text-teal" />
                      <span className="rounded-md bg-soft-teal px-2 py-0.5 border border-teal/30">
                        AntConc / KWIC
                      </span>
                      <ArrowRight aria-hidden="true" className="h-3 w-3 text-teal" />
                      <span className="rounded-md bg-soft-purple px-2 py-0.5 border border-purple/25">
                        CIA · Log-likelihood · Error Analysis
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-secondary-text">
                  Scope reflects documented thesis structure and tools in the CV;
                  unpublished empirical findings are intentionally omitted.
                </p>
              </aside>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
