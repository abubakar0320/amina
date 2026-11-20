import { ArrowRight } from "lucide-react";
import { RESEARCH_WORKFLOW_STEPS } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchMethodologyWorkflowSection() {
  const firstRow = RESEARCH_WORKFLOW_STEPS.slice(0, 4);
  const secondRow = RESEARCH_WORKFLOW_STEPS.slice(4);

  return (
    <section
      id="methodology-workflow"
      aria-labelledby="methodology-workflow-heading"
      className="border-y border-border-subtle bg-cool-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="methodology-workflow-heading"
            eyebrow="Analytical Workflow"
            title="Research Methodology & Analytical Approach"
            description="The seven documented methodological components applied in corpus selection, grammatical annotation, concordancing, and contrastive evaluation."
            accent="navy"
          />

          {/* Mobile Vertical Sequence (< lg) */}
          <ol className="relative lg:hidden space-y-4 pl-7 before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-teal/45">
            {RESEARCH_WORKFLOW_STEPS.map((step) => (
              <li key={step.stepNumber} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-7 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-teal bg-soft-teal text-[0.6875rem] font-bold text-deep-navy"
                >
                  {step.stepNumber}
                </span>
                <Card surface="white" accentTone="teal" className="p-5 space-y-1.5">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy">
                    Step {step.stepNumber}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-deep-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary-text">
                    {step.detail}
                  </p>
                </Card>
              </li>
            ))}
          </ol>

          {/* Desktop Horizontal Workflow (>= lg): 4-step top row + 3-step bottom row */}
          <div className="hidden lg:block space-y-6">
            <ol className="grid grid-cols-4 gap-5">
              {firstRow.map((step, index) => (
                <li key={step.stepNumber} className="relative flex">
                  <Card
                    surface="white"
                    interactive
                    accentTop={index === 0}
                    accentTone="teal"
                    className="w-full p-6 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex h-7 px-2.5 items-center justify-center rounded-lg border border-teal/35 bg-soft-teal text-xs font-semibold text-deep-navy">
                          Step {step.stepNumber}
                        </span>
                        {index < firstRow.length - 1 && (
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 text-teal"
                          />
                        )}
                      </div>
                      <h3 className="font-serif text-lg font-semibold leading-snug text-deep-navy">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary-text">
                      {step.detail}
                    </p>
                  </Card>
                </li>
              ))}
            </ol>

            <ol start={5} className="grid grid-cols-3 gap-5">
              {secondRow.map((step, index) => (
                <li key={step.stepNumber} className="relative flex">
                  <Card
                    surface="white"
                    interactive
                    accentTone="navy"
                    className="w-full p-6 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex h-7 px-2.5 items-center justify-center rounded-lg border border-primary-navy/25 bg-soft-blue text-xs font-semibold text-deep-navy">
                          Step {step.stepNumber}
                        </span>
                        {index < secondRow.length - 1 && (
                          <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 text-teal"
                          />
                        )}
                      </div>
                      <h3 className="font-serif text-lg font-semibold leading-snug text-deep-navy">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary-text">
                      {step.detail}
                    </p>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
