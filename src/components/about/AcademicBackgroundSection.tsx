import { Award, GraduationCap } from "lucide-react";
import { EDUCATION_RECORDS } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function AcademicBackgroundSection() {
  return (
    <section
      id="academic-background"
      aria-labelledby="academic-background-heading"
      className="border-y border-purple/20 bg-soft-purple py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="academic-background-heading"
            eyebrow="Qualifications"
            title="Academic Background"
            description="Higher-education degrees completed at Government College University Faisalabad (GCUF), presented directly from the academic CV."
            accent="purple"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {EDUCATION_RECORDS.map((edu, index) => {
              const isGraduate = index === 0;

              return (
                <Card
                  key={edu.id}
                  as="article"
                  surface="white"
                  interactive
                  accentTop={isGraduate}
                  accentTone="purple"
                  className="flex flex-col justify-between"
                >
                  <div>
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple/30 bg-soft-purple text-purple">
                          <GraduationCap aria-hidden="true" className="h-5 w-5" />
                        </span>

                        <Badge variant={isGraduate ? "purple" : "cool"}>
                          {isGraduate
                            ? "Postgraduate Research Degree"
                            : "Undergraduate Honours Degree"}
                        </Badge>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug text-deep-navy">
                        {edu.degree}
                      </h3>
                    </CardHeader>

                    <CardBody className="space-y-4 pb-7">
                      <div className="rounded-xl border border-purple/20 bg-soft-purple/50 p-4 space-y-2">
                        <div>
                          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                            Institution
                          </p>
                          <p className="mt-0.5 text-sm sm:text-[0.95rem] font-semibold text-deep-navy">
                            {edu.institution}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-purple/15 flex items-center justify-between gap-2">
                          <span className="text-xs font-medium text-main-text/85">
                            Cumulative Grade Point Average
                          </span>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple/30 bg-pure-white px-3 py-0.5 text-xs font-semibold text-deep-navy">
                            <Award aria-hidden="true" className="h-3.5 w-3.5 text-purple" />
                            CGPA {edu.cgpa}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-secondary-text">
                        {edu.note}
                      </p>
                    </CardBody>
                  </div>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
