import { ArrowRight, Award, GraduationCap, UserCheck } from "lucide-react";
import {
  ACADEMIC_IDENTITY,
  ACADEMIC_REFERENCE,
  EDUCATION_RECORDS,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function AcademicIntroSection() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-heading"
      className="py-16 sm:py-20 lg:py-24 bg-cool-white scroll-mt-20"
    >
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: Concise Academic Journey Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                id="introduction-heading"
                eyebrow="Academic Introduction"
                title="About My Academic Journey"
                accent="navy"
              />

              <div className="space-y-4 text-[0.975rem] sm:text-[1.03125rem] leading-[1.8] text-secondary-text">
                <p>
                  <span className="font-medium text-deep-navy">
                    Amina Mumtaz
                  </span>{" "}
                  holds an MPhil in Applied Linguistics and a BS (Hons) in
                  English Literature &amp; Linguistics from Government College
                  University Faisalabad.
                </p>
                <p>
                  Her academic interests include corpus linguistics, learner
                  language, colligation, second-language acquisition, and
                  English language teaching.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {ACADEMIC_IDENTITY.specializations.map((spec) => (
                  <Badge key={spec} variant="blue">
                    {spec}
                  </Badge>
                ))}
              </div>

              <div className="pt-2">
                <ButtonLink
                  href="/about"
                  variant="purple"
                  size="md"
                  className="group"
                >
                  <span>Discover My Academic Profile</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-purple transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  />
                </ButtonLink>
              </div>
            </div>

            {/* Right: Soft-Purple Academic Background & Credentials Card */}
            <div className="lg:col-span-6">
              <Card
                surface="purple"
                accentTop
                accentTone="purple"
                className="overflow-hidden"
              >
                <CardHeader className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple/30 bg-pure-white text-purple shadow-2xs">
                      <GraduationCap aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-deep-navy">
                        Academic Credentials
                      </h3>
                      <p className="text-xs font-medium text-main-text/80">
                        Government College University Faisalabad (GCUF)
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-pure-white text-deep-navy">
                    Verified CV
                  </Badge>
                </CardHeader>

                <CardBody className="space-y-4 pb-7">
                  {EDUCATION_RECORDS.map((edu) => (
                    <div
                      key={edu.id}
                      className="rounded-xl border border-purple/20 bg-pure-white p-4 space-y-1.5 shadow-2xs"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-semibold text-[0.95rem] text-deep-navy">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 rounded-full border border-purple/30 bg-soft-purple px-2.5 py-0.5 text-xs font-semibold text-deep-navy">
                          <Award aria-hidden="true" className="h-3 w-3 text-purple" />
                          CGPA {edu.cgpa}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-primary-navy">
                        {edu.institution}
                      </p>
                      <p className="text-xs leading-relaxed text-secondary-text">
                        {edu.note}
                      </p>
                    </div>
                  ))}

                  {/* Academic Supervisor Reference */}
                  <div className="rounded-xl border border-purple/20 bg-pure-white/95 p-4 flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-purple/25 bg-soft-purple text-purple">
                      <UserCheck aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-secondary-text">
                        Academic Reference
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-deep-navy">
                        {ACADEMIC_REFERENCE.name}
                      </p>
                      <p className="text-xs text-secondary-text">
                        {ACADEMIC_REFERENCE.title}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
