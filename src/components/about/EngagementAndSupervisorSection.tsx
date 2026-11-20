import { BookOpenCheck, Sparkles, UserCheck } from "lucide-react";
import { SUPERVISOR_ACKNOWLEDGEMENT } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const ENGAGEMENT_THEMES = [
  "Learner corpus research",
  "Corpus-based language analysis",
  "Colligation patterns",
  "English language learning",
  "Applied Linguistics",
] as const;

export function EngagementAndSupervisorSection() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-heading"
      className="bg-cool-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Academic & Research Engagement */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                id="engagement-heading"
                eyebrow="Scholarly Development"
                title="Academic and Research Engagement"
                accent="purple"
              />

              <div className="space-y-4 text-[0.975rem] sm:text-[1.03125rem] leading-[1.8] text-secondary-text">
                <p>
                  Amina Mumtaz&apos;s scholarly engagement centers on{" "}
                  <span className="font-medium text-deep-navy">
                    learner corpus research
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-deep-navy">
                    corpus-based language analysis
                  </span>
                  , with particular attention to{" "}
                  <span className="font-medium text-deep-navy">
                    colligation patterns
                  </span>{" "}
                  and how second-language writers structure grammatical choices
                  in English.
                </p>

                <p>
                  Through university and college teaching alongside empirical
                  comparative study of learner English, she continues to advance
                  research connecting linguistic evidence with classroom English
                  language learning and broader inquiry in Applied Linguistics.
                </p>
              </div>

              <div className="rounded-2xl border border-purple/25 bg-soft-purple p-5 flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple/30 bg-pure-white text-purple">
                  <Sparkles aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy">
                    Doctoral Aspirations
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-deep-navy">
                    Interested in doctoral research opportunities in Applied
                    Linguistics and related fields.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {ENGAGEMENT_THEMES.map((theme) => (
                  <Badge key={theme} variant="blue">
                    {theme}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Research Supervisor Acknowledgement */}
            <aside
              aria-labelledby="supervisor-heading"
              className="lg:col-span-5"
            >
              <Card surface="white" accentTop accentTone="purple">
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple/30 bg-soft-purple text-purple">
                      <UserCheck aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-secondary-text">
                        Acknowledgement
                      </p>
                      <h2
                        id="supervisor-heading"
                        className="font-serif text-lg sm:text-xl font-semibold text-deep-navy"
                      >
                        MPhil Research Supervision
                      </h2>
                    </div>
                  </div>
                </CardHeader>

                <CardBody className="space-y-4 pb-7">
                  <div className="rounded-xl border border-border-subtle bg-soft-blue/45 p-4 space-y-3">
                    <div>
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                        Research Supervisor
                      </p>
                      <p className="mt-0.5 font-serif text-lg font-semibold text-deep-navy">
                        {SUPERVISOR_ACKNOWLEDGEMENT.name}
                      </p>
                    </div>

                    <div className="border-t border-border-subtle pt-3">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                        Department
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-main-text">
                        {SUPERVISOR_ACKNOWLEDGEMENT.department}
                      </p>
                    </div>
                  </div>

                  <p className="flex items-start gap-2 text-xs leading-relaxed text-secondary-text">
                    <BookOpenCheck
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal"
                    />
                    <span>
                      Graduate research on corpus-based colligations conducted
                      under MPhil supervision at Government College University
                      Faisalabad.
                    </span>
                  </p>
                </CardBody>
              </Card>
            </aside>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
