import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { ENGAGEMENT_OPPORTUNITIES } from "@/data/teaching-and-resources";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function TeachingEngagementSection() {
  return (
    <section
      id="academic-engagement"
      aria-labelledby="teaching-engagement-heading"
      className="border-t border-primary-navy bg-deep-navy text-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-pure-white/15 bg-primary-navy/65 px-6 py-10 sm:px-10 sm:py-14 lg:px-14 shadow-[var(--shadow-card)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-terracotta"
            />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8 space-y-5">
                <Badge
                  variant="terracotta"
                  dot
                  className="bg-pure-white/10 border-terracotta text-pure-white"
                >
                  Knowledge Sharing &amp; Dialogue
                </Badge>

                <h2
                  id="teaching-engagement-heading"
                  className="font-serif text-2xl sm:text-3xl lg:text-[2.375rem] font-semibold leading-[1.18] tracking-[-0.015em] text-pure-white"
                >
                  Learning Through Academic Engagement
                </h2>

                <p className="max-w-2xl text-[0.975rem] sm:text-base leading-[1.75] text-soft-blue/90">
                  Welcoming future academic communication and scholarly dialogue
                  with students, university colleagues, and researchers across
                  Applied Linguistics and English language education.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {ENGAGEMENT_OPPORTUNITIES.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm font-medium text-pure-white"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-golden-yellow"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink
                  href="/contact"
                  variant="terracotta"
                  size="lg"
                  fullWidth
                >
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4 text-soft-gold"
                  />
                  <span>Contact for Academic Dialogue</span>
                </ButtonLink>

                <ButtonLink
                  href="/cv"
                  variant="outlineOnDark"
                  size="lg"
                  fullWidth
                  className="group"
                >
                  <span>View Academic CV</span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 text-golden-yellow transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                  />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
