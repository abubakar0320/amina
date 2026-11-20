import { Building2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const VERIFIED_TEACHING_POSITIONS = [
  {
    id: "about-bgnu",
    role: "Visiting Lecturer",
    institution: "Baba Guru Nanak University (BGNU)",
    location: "Nankana Sahib, Pakistan",
    level: "University-Level Appointment",
  },
  {
    id: "about-shiblee",
    role: "Lecturer",
    institution: "Shiblee College",
    location: "Safdarabad, Pakistan",
    level: "College-Level Appointment",
  },
  {
    id: "about-eqan",
    role: "Lecturer",
    institution: "Eqan Girls College",
    location: "Shahkot, Pakistan",
    level: "College-Level Appointment",
  },
] as const;

export function AboutExperienceSection() {
  return (
    <section
      id="teaching-experience"
      aria-labelledby="about-teaching-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="about-teaching-heading"
            eyebrow="Academic Appointments"
            title="Teaching & Academic Experience"
            description="Verified university and college teaching appointments in English and Applied Linguistics."
            accent="gold"
          />

          <ol className="relative max-w-4xl space-y-5 pl-6 sm:pl-9 before:absolute before:left-[9px] sm:before:left-[11px] before:top-4 before:bottom-4 before:w-[2px] before:bg-golden-yellow/65">
            {VERIFIED_TEACHING_POSITIONS.map((position, index) => (
              <li key={position.id} className="relative">
                {/* Golden timeline marker */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-6 sm:-left-9 top-6 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-2 ${
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
                  surface={index === 0 ? "gold" : "white"}
                  interactive
                  accentTop={index === 0}
                  accentTone="gold"
                  className="p-6 sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-golden-yellow/70 bg-soft-gold text-deep-navy">
                        <Building2 aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <div className="space-y-1">
                        <h3 className="font-serif text-xl font-semibold text-deep-navy">
                          {position.role}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-primary-navy">
                          {position.institution}
                        </p>
                        <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-main-text/80">
                          <MapPin
                            aria-hidden="true"
                            className="h-3.5 w-3.5 text-terracotta"
                          />
                          <span>{position.location}</span>
                        </p>
                      </div>
                    </div>

                    <Badge
                      variant={index === 0 ? "gold" : "cool"}
                      className="self-start sm:self-center"
                    >
                      {position.level}
                    </Badge>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
