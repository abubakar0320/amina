import { ACADEMIC_EXPLORATION_MATRIX } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchInterestsMatrixSection() {
  return (
    <section
      id="academic-exploration"
      aria-labelledby="academic-exploration-heading"
      className="border-y border-teal/20 bg-soft-teal py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="academic-exploration-heading"
            eyebrow="Academic Exploration"
            title="Areas of Academic Exploration"
            description="Structured matrix of research and pedagogical domains shaping ongoing inquiry in Applied Linguistics."
            accent="teal"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ACADEMIC_EXPLORATION_MATRIX.map((item) => (
              <Card
                key={item.id}
                as="article"
                surface="white"
                interactive
                accentTop
                accentTone="teal"
                className="p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <Badge variant="teal">{item.lens}</Badge>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-deep-navy">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-[1.7] text-secondary-text">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
