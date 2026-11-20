import {
  BookOpen,
  DatabaseSearch,
  FileSearch,
  GitCompare,
  GraduationCap,
  Languages,
  Layers,
} from "lucide-react";
import {
  RESEARCH_INTEREST_AREAS,
  type ResearchInterestArea,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const ICON_MAP: Record<ResearchInterestArea["iconName"], typeof BookOpen> = {
  BookOpen,
  DatabaseSearch,
  FileSearch,
  GitCompare,
  GraduationCap,
  Languages,
  Layers,
};

export function ResearchInterestsSection() {
  return (
    <section
      id="research-interests"
      aria-labelledby="research-interests-heading"
      className="border-y border-teal/20 bg-soft-teal py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="research-interests-heading"
            eyebrow="Scholarship & Inquiry"
            title="Areas of Research Interest"
            description="Core domains of applied linguistic investigation shaped by corpus-based learner analysis and university-level English instruction."
            accent="teal"
          />

          {/* Six Research Interest Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_INTEREST_AREAS.map((area, index) => {
              const IconComponent = ICON_MAP[area.iconName];
              const numberLabel = String(index + 1).padStart(2, "0");

              return (
                <Card
                  key={area.id}
                  as="article"
                  surface="white"
                  interactive
                  accentTone="teal"
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal/30 bg-soft-teal text-teal transition-colors duration-200 group-hover:border-teal group-hover:bg-teal group-hover:text-pure-white">
                          <IconComponent aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <span
                          aria-hidden="true"
                          className="font-serif text-sm font-semibold tracking-wider text-secondary-text group-hover:text-primary-navy transition-colors"
                        >
                          {numberLabel}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg sm:text-[1.25rem] font-semibold leading-snug text-deep-navy">
                        {area.title}
                      </h3>
                    </CardHeader>

                    <CardBody className="pt-0">
                      <p className="text-sm leading-[1.7] text-secondary-text">
                        {area.summary}
                      </p>
                    </CardBody>
                  </div>

                  <div className="px-6 pb-6 pt-3 sm:px-7 flex flex-wrap gap-2">
                    {area.keywords.map((keyword) => (
                      <Badge key={keyword} variant="teal">
                        {keyword}
                      </Badge>
                    ))}
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
