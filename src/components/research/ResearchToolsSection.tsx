import {
  AlignCenter,
  Binary,
  Braces,
  Calculator,
  Database,
  FileWarning,
  GitCompare,
  ListFilter,
  Search,
  Tag,
} from "lucide-react";
import {
  RESEARCH_TOOLS_CARDS,
  type ResearchToolCardItem,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const TOOL_ICON_MAP: Record<ResearchToolCardItem["iconName"], typeof Database> = {
  Database,
  Tag,
  Search,
  ListFilter,
  AlignCenter,
  Braces,
  Binary,
  GitCompare,
  Calculator,
  FileWarning,
};

export function ResearchToolsSection() {
  return (
    <section
      id="research-tools"
      aria-labelledby="research-tools-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="research-tools-heading"
            eyebrow="Technical & Analytical Profile"
            title="Research Tools & Analytical Skills"
            description="Verified corpus resources, linguistic annotation software, tagsets, and analytical methods documented in the Curriculum Vitae."
            accent="teal"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {RESEARCH_TOOLS_CARDS.map((tool) => {
              const IconComponent = TOOL_ICON_MAP[tool.iconName];

              return (
                <Card
                  key={tool.id}
                  as="article"
                  surface="cool"
                  interactive
                  accentTone="teal"
                  className="flex flex-col justify-between"
                >
                  <div>
                    <CardHeader className="space-y-3.5 px-5 pt-5 pb-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-teal/30 bg-soft-teal text-teal transition-colors group-hover:bg-teal group-hover:text-pure-white">
                          <IconComponent aria-hidden="true" className="h-4 w-4" />
                        </span>
                        <Badge variant="teal" className="text-[0.6875rem] px-2.5 py-0.5 bg-pure-white">
                          {tool.category}
                        </Badge>
                      </div>

                      <h3 className="font-serif text-base sm:text-[1.0625rem] font-semibold leading-snug text-deep-navy">
                        {tool.name}
                      </h3>
                    </CardHeader>

                    <CardBody className="px-5 pt-0 pb-5">
                      <p className="text-xs sm:text-[0.8125rem] leading-[1.68] text-secondary-text">
                        {tool.description}
                      </p>
                    </CardBody>
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
