import { RESEARCH_OVERVIEW_AREAS } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchFocusSection() {
  return (
    <section
      id="research-focus"
      aria-labelledby="research-focus-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="research-focus-heading"
            eyebrow="Research Overview"
            title="My Research Focus"
            description="The thematic areas of academic interest established in the Curriculum Vitae, spanning empirical learner-corpus inquiry and English language pedagogy."
            accent="teal"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_OVERVIEW_AREAS.map((area) => (
              <Card
                key={area.code}
                as="article"
                surface="teal"
                interactive
                accentTone="teal"
                className="p-6 space-y-3.5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-teal/35 bg-pure-white font-serif text-sm font-semibold text-teal">
                    {area.code}
                  </span>
                  <h3 className="font-serif text-lg sm:text-[1.1875rem] font-semibold text-deep-navy">
                    {area.title}
                  </h3>
                </div>

                <p className="border-l-2 border-teal/55 pl-3.5 text-sm leading-[1.7] text-main-text/90">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
