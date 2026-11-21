import { BookMarked, CheckCircle2, FlaskConical } from "lucide-react";
import {
  METHODOLOGY_DATASET_METRICS,
  METHODOLOGY_PIPELINE,
  MPHIL_THESIS,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchMethodologySection() {
  return (
    <section
      id="research-methodology"
      aria-labelledby="methodology-heading"
      className="border-y border-border-subtle bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="methodology-heading"
            eyebrow="Empirical Methodology"
            title="Research Through Evidence and Analysis"
            description="Methodological rigor applied in the MPhil comparative learner-corpus study using the ICNALE V2.0 corpus and multi-stage computational linguistic analysis."
            accent="teal"
          />

          {/* MPhil Corpus Dataset Triad (White & Navy with Teal Accents) */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {METHODOLOGY_DATASET_METRICS.map((metric, idx) => (
              <Card
                key={metric.label}
                surface={idx === 0 ? "navy" : "cool"}
                accentTop={idx === 0}
                accentTone="teal"
                className="p-6 space-y-2"
              >
                <p
                  className={
                    idx === 0
                      ? "font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-pure-white"
                      : "font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-deep-navy"
                  }
                >
                  {metric.value}
                </p>
                <h3
                  className={
                    idx === 0
                      ? "text-sm font-semibold uppercase tracking-[0.08em] text-golden-yellow"
                      : "text-sm font-semibold uppercase tracking-[0.08em] text-primary-navy"
                  }
                >
                  {metric.label}
                </h3>
                <p
                  className={
                    idx === 0
                      ? "text-xs sm:text-[0.8125rem] leading-relaxed text-soft-blue/90"
                      : "text-xs sm:text-[0.8125rem] leading-relaxed text-secondary-text"
                  }
                >
                  {metric.caption}
                </p>
              </Card>
            ))}
          </div>

          {/* 4-Stage Analytical Pipeline + MPhil Thesis Context */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start">
            {/* Editorial Pipeline Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {METHODOLOGY_PIPELINE.map((stage) => (
                <Card
                  key={stage.step}
                  surface="cool"
                  interactive
                  accentTone="teal"
                  className="p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex h-8 px-2.5 items-center justify-center rounded-lg border border-teal bg-teal text-xs font-semibold tracking-wider text-pure-white">
                        Stage {stage.step}
                      </span>
                      <FlaskConical
                        aria-hidden="true"
                        className="h-4 w-4 text-teal"
                      />
                    </div>

                    <h3 className="font-serif text-lg font-semibold text-deep-navy">
                      {stage.title}
                    </h3>

                    <p className="text-sm leading-[1.7] text-secondary-text">
                      {stage.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-subtle">
                    {stage.tools.map((tool) => (
                      <Badge key={tool} variant="teal">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* MPhil Thesis & Analytical Summary Sidebar */}
            <Card
              surface="white"
              accentTop
              accentTone="navy"
              className="lg:col-span-4 p-6 space-y-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal/35 bg-soft-teal text-teal">
                  <BookMarked aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-secondary-text">
                    MPhil Thesis Scope
                  </p>
                  <p className="text-xs font-medium text-primary-navy">
                    Department of Applied Linguistics, GCUF
                  </p>
                </div>
              </div>

              <h3 className="font-serif text-lg font-semibold leading-snug text-deep-navy">
                {MPHIL_THESIS.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-secondary-text">
                Supervised by{" "}
                <span className="font-medium text-deep-navy">
                  {MPHIL_THESIS.supervisor}
                </span>
                .
              </p>

              <div className="space-y-2 border-t border-border-subtle pt-4">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy">
                  Verified Analytical Techniques
                </p>
                <ul className="space-y-2">
                  {MPHIL_THESIS.analyticalTools.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-2 text-xs font-medium text-main-text"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-teal"
                      />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
