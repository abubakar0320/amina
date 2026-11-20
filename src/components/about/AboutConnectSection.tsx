import { ArrowRight, BookOpen, Mail } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function AboutConnectSection() {
  return (
    <section
      id="connect-researcher"
      aria-labelledby="about-connect-heading"
      className="border-t border-primary-navy bg-deep-navy text-pure-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-pure-white/15 bg-primary-navy/65 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 shadow-[var(--shadow-card)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-terracotta"
            />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-4">
                <Badge
                  variant="terracotta"
                  dot
                  className="bg-pure-white/10 border-terracotta text-pure-white"
                >
                  Academic Dialogue
                </Badge>

                <h2
                  id="about-connect-heading"
                  className="font-serif text-2xl sm:text-3xl lg:text-[2.375rem] font-semibold leading-[1.18] tracking-[-0.015em] text-pure-white"
                >
                  Interested in Academic Exchange?
                </h2>

                <p className="max-w-2xl text-[0.975rem] sm:text-[1.0625rem] leading-[1.75] text-soft-blue/90">
                  Explore research interests, academic publications and
                  opportunities for professional communication.
                </p>

                <p className="text-xs sm:text-sm font-medium text-golden-yellow">
                  {ACADEMIC_IDENTITY.email} &middot; {ACADEMIC_IDENTITY.location}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink
                  href="/publications"
                  variant="outlineOnDark"
                  size="lg"
                  fullWidth
                  className="group"
                >
                  <BookOpen
                    aria-hidden="true"
                    className="h-4 w-4 text-golden-yellow"
                  />
                  <span>Explore Publications</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 text-golden-yellow transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  />
                </ButtonLink>

                <ButtonLink
                  href="/contact"
                  variant="terracotta"
                  size="lg"
                  fullWidth
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-terracotta" />
                  <span>Contact Amina</span>
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
