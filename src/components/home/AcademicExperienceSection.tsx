import { Building2, MapPin, Presentation, UserCheck } from "lucide-react";
import {
  ACADEMIC_REFERENCE,
  TEACHING_APPOINTMENTS,
  TEACHING_INTERESTS,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function AcademicExperienceSection() {
  return (
    <section
      id="academic-experience"
      aria-labelledby="academic-experience-heading"
      className="bg-cool-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="academic-experience-heading"
            eyebrow="Academic Appointments"
            title="Teaching & Academic Experience"
            description="Verified university and college teaching appointments across higher-education institutions in Punjab, Pakistan."
            accent="gold"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
            {/* Vertical Editorial Academic Timeline with Soft Gold Accents */}
            <div className="lg:col-span-8">
              <ol className="relative space-y-5 pl-6 sm:pl-8 before:absolute before:left-[9px] sm:before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-golden-yellow/65">
                {TEACHING_APPOINTMENTS.map((item, index) => (
                  <li key={item.id} className="relative">
                    {/* Timeline Marker */}
                    <span
                      aria-hidden="true"
                      className={`absolute -left-6 sm:-left-8 top-6 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-2 ${
                        index === 0
                          ? "border-golden-yellow bg-soft-gold"
                          : "border-golden-yellow/75 bg-pure-white"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          index === 0 ? "bg-terracotta" : "bg-primary-navy/60"
                        }`}
                      />
                    </span>

                    <Card
                      as="article"
                      surface="white"
                      interactive
                      accentTop={index === 0}
                      accentTone="gold"
                      className="p-6"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-3.5">
                          <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-golden-yellow/70 bg-soft-gold text-deep-navy">
                            <Building2 aria-hidden="true" className="h-5 w-5" />
                          </span>

                          <div className="space-y-1">
                            <h3 className="font-serif text-lg sm:text-xl font-semibold text-deep-navy">
                              {item.role}
                            </h3>
                            <p className="text-sm sm:text-[0.95rem] font-semibold text-primary-navy">
                              {item.institution}
                            </p>
                            <p className="inline-flex items-center gap-1.5 text-xs text-secondary-text">
                              <MapPin
                                aria-hidden="true"
                                className="h-3.5 w-3.5 text-terracotta"
                              />
                              <span>{item.location}</span>
                            </p>
                          </div>
                        </div>

                        <Badge
                          variant={index === 0 ? "gold" : "cool"}
                          className="self-start"
                        >
                          {item.level}
                        </Badge>
                      </div>

                      <p className="mt-4 border-t border-border-subtle pt-3.5 text-sm leading-relaxed text-secondary-text">
                        {item.focusNote}
                      </p>
                    </Card>
                  </li>
                ))}
              </ol>
            </div>

            {/* Teaching Interests (Soft Gold) & Academic Referee Sidebar */}
            <div className="lg:col-span-4 space-y-5">
              <Card surface="gold" accentTop accentTone="gold">
                <CardHeader className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-golden-yellow bg-pure-white text-deep-navy">
                      <Presentation aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-deep-navy">
                      Teaching Interests
                    </h3>
                  </div>
                </CardHeader>

                <CardBody className="space-y-4 pb-6">
                  <p className="text-sm leading-relaxed text-main-text/90">
                    Subject areas aligned with undergraduate and graduate
                    teaching experience:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TEACHING_INTERESTS.map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="bg-pure-white text-deep-navy border-golden-yellow/60"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardBody>
              </Card>

              <Card surface="white">
                <CardBody className="py-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy">
                    <UserCheck
                      aria-hidden="true"
                      className="h-4 w-4 text-teal"
                    />
                    <span>Academic Referee</span>
                  </div>
                  <p className="font-serif text-base font-semibold text-deep-navy">
                    {ACADEMIC_REFERENCE.name}
                  </p>
                  <p className="text-xs leading-relaxed text-secondary-text">
                    {ACADEMIC_REFERENCE.title}
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
