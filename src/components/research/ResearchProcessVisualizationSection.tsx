import { ArrowDown } from "lucide-react";
import { RESEARCH_PROCESS_NODES } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchProcessVisualizationSection() {
  return (
    <section
      id="process-visualization"
      aria-labelledby="process-visualization-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="process-visualization-heading"
            eyebrow="Component Relationship"
            title="Research Process Visualization"
            description="Schematic mapping of how corpus sources, annotation software, concordancing tools, and comparative analytical frameworks relate within the documented methodology."
            align="center"
            accent="navy"
          />

          <div className="mx-auto max-w-2xl">
            <Card
              surface="cool"
              accentTop
              accentTone="navy"
              className="p-6 sm:p-8 lg:p-10"
            >
              <ol
                aria-label="Research process components"
                className="flex flex-col items-center"
              >
                {RESEARCH_PROCESS_NODES.map((node, index) => {
                  const isFirst = index === 0;
                  const isLast = index === RESEARCH_PROCESS_NODES.length - 1;

                  return (
                    <li
                      key={node.id}
                      className="flex w-full flex-col items-center"
                    >
                      <div
                        className={`w-full rounded-2xl border px-5 py-4 sm:px-6 sm:py-5 shadow-2xs transition-colors duration-200 ${
                          isFirst
                            ? "border-primary-navy bg-deep-navy text-pure-white"
                            : isLast
                            ? "border-teal/50 bg-soft-teal text-deep-navy"
                            : "border-border-subtle bg-pure-white hover:border-teal/60"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="flex items-center gap-3">
                            <span
                              className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-serif text-xs font-semibold ${
                                isFirst
                                  ? "border-golden-yellow/80 bg-primary-navy text-golden-yellow"
                                  : "border-teal/35 bg-soft-teal text-deep-navy"
                              }`}
                            >
                              {node.step}
                            </span>
                            <h3
                              className={`font-serif text-base sm:text-lg font-semibold ${
                                isFirst ? "text-pure-white" : "text-deep-navy"
                              }`}
                            >
                              {node.label}
                            </h3>
                          </div>
                          <p
                            className={`text-xs sm:text-[0.8125rem] sm:text-right ${
                              isFirst ? "text-soft-blue" : "text-secondary-text"
                            }`}
                          >
                            {node.sublabel}
                          </p>
                        </div>
                      </div>

                      {!isLast && (
                        <div
                          aria-hidden="true"
                          className="flex flex-col items-center py-1.5 text-teal"
                        >
                          <span className="h-3 w-[2px] bg-teal/70" />
                          <ArrowDown className="h-4 w-4 -mt-1" />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>

              <p className="mt-7 border-t border-border-subtle pt-4 text-center text-xs leading-relaxed text-secondary-text">
                Note: This diagram represents the documented research components
                from the Curriculum Vitae rather than claiming every operation
                occurred in a strictly linear chronological sequence.
              </p>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
