import {
  BookOpen,
  Compass,
  DatabaseSearch,
  Feather,
  GitCompare,
  GraduationCap,
  Languages,
  Layers,
  Terminal,
} from "lucide-react";
import {
  ABOUT_RESEARCH_INTERESTS,
  ABOUT_TEACHING_INTERESTS,
  type AboutResearchInterestItem,
  type AboutTeachingInterestItem,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const RESEARCH_ICON_MAP: Record<
  AboutResearchInterestItem["iconName"],
  typeof BookOpen
> = {
  DatabaseSearch,
  Layers,
  GitCompare,
  Languages,
  GraduationCap,
  BookOpen,
};

const TEACHING_ICON_MAP: Record<
  AboutTeachingInterestItem["iconName"],
  typeof Terminal
> = {
  Terminal,
  Languages,
  Feather,
  Compass,
};

export function AboutInterestsSection() {
  return (
    <section
      id="interests"
      aria-labelledby="about-research-interests-heading"
      className="border-y border-teal/20 bg-soft-teal py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container className="space-y-16 sm:space-y-20">
        {/* Research Interests Grid */}
        <Reveal className="space-y-10">
          <SectionHeading
            id="about-research-interests-heading"
            eyebrow="Scholarly Focus"
            title="Research Interests"
            description="Thematic domains spanning empirical corpus linguistics, learner English comparison, and language education."
            accent="teal"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ABOUT_RESEARCH_INTERESTS.map((area) => {
              const IconComponent = RESEARCH_ICON_MAP[area.iconName];

              return (
                <Card
                  key={area.id}
                  as="article"
                  surface="white"
                  interactive
                  accentTone="teal"
                  className="flex flex-col"
                >
                  <CardHeader className="space-y-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-teal/30 bg-soft-teal text-teal transition-colors group-hover:bg-teal group-hover:text-pure-white">
                      <IconComponent aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="font-serif text-lg sm:text-[1.2rem] font-semibold leading-snug text-deep-navy">
                      {area.title}
                    </h3>
                  </CardHeader>

                  <CardBody className="pt-0 pb-6">
                    <p className="text-sm leading-[1.7] text-secondary-text">
                      {area.description}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Reveal>

        {/* Teaching Interests Grid */}
        <Reveal className="space-y-10 pt-8 border-t border-teal/20">
          <SectionHeading
            id="about-teaching-interests-heading"
            eyebrow="Pedagogical Focus"
            title="Teaching Interests"
            description="Core subject domains supporting university and college-level English instruction."
            accent="gold"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ABOUT_TEACHING_INTERESTS.map((item) => {
              const IconComponent = TEACHING_ICON_MAP[item.iconName];

              return (
                <Card
                  key={item.id}
                  as="article"
                  surface="white"
                  interactive
                  accentTop
                  accentTone="gold"
                  className="flex flex-col"
                >
                  <CardHeader className="space-y-3.5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-golden-yellow/75 bg-soft-gold text-deep-navy">
                      <IconComponent aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <h3 className="font-serif text-lg font-semibold leading-snug text-deep-navy">
                      {item.title}
                    </h3>
                  </CardHeader>

                  <CardBody className="pt-0 pb-6">
                    <p className="text-sm leading-[1.68] text-secondary-text">
                      {item.description}
                    </p>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
