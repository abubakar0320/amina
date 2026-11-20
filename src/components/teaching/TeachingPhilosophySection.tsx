import { TEACHING_PHILOSOPHY_THEMES } from "@/data/teaching-and-resources";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function TeachingPhilosophySection() {
  return (
    <section
      id="teaching-philosophy"
      aria-labelledby="teaching-philosophy-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            {/* Editorial Introduction */}
            <div className="lg:col-span-5 space-y-5">
              <SectionHeading
                id="teaching-philosophy-heading"
                eyebrow="Pedagogical Perspective"
                title="An Approach to Language Learning"
                accent="gold"
              />

              <p className="text-[0.975rem] sm:text-base leading-[1.78] text-secondary-text">
                In university English language education and Applied
                Linguistics, effective instruction balances theoretical clarity
                with authentic linguistic observation.
              </p>

              <div className="rounded-2xl border border-golden-yellow/55 bg-soft-gold p-5 text-xs sm:text-sm leading-relaxed text-main-text/90">
                The themes alongside this note outline general academic
                principles in language learning and linguistic analysis rather
                than attributed personal quotations or an officially mandated
                institutional curriculum.
              </div>
            </div>

            {/* Five Guiding Educational Themes */}
            <div className="lg:col-span-7 space-y-4">
              {TEACHING_PHILOSOPHY_THEMES.map((theme) => (
                <Card
                  key={theme.number}
                  as="article"
                  surface="cool"
                  interactive
                  accentTone="gold"
                  className="p-5 sm:p-6 flex items-start gap-4"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-golden-yellow/80 bg-soft-gold font-serif text-sm font-semibold text-deep-navy transition-colors duration-200 [@media(hover:hover)]:group-hover:border-golden-yellow [@media(hover:hover)]:group-hover:bg-golden-yellow">
                    {theme.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-semibold text-deep-navy">
                      {theme.title}
                    </h3>
                    <p className="text-sm leading-[1.7] text-secondary-text">
                      {theme.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
