import { Compass, Feather, Languages, Terminal } from "lucide-react";
import type { TeachingInterestCardItem } from "@/data/teaching-and-resources";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

const INTEREST_ICONS: Record<
  TeachingInterestCardItem["iconName"],
  typeof Terminal
> = {
  Terminal,
  Languages,
  Feather,
  Compass,
};

export interface TeachingInterestCardProps {
  item: TeachingInterestCardItem;
}

export function TeachingInterestCard({ item }: TeachingInterestCardProps) {
  const IconComponent = INTEREST_ICONS[item.iconName];

  return (
    <Card
      as="article"
      surface="white"
      interactive
      accentTop
      accentTone="gold"
      className="group flex flex-col"
    >
      <CardHeader className="space-y-4">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-golden-yellow/75 bg-soft-gold text-deep-navy transition-colors duration-200 group-hover:border-golden-yellow group-hover:bg-golden-yellow">
          <IconComponent aria-hidden="true" className="h-5 w-5" />
        </span>

        <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-deep-navy">
          {item.title}
        </h3>
      </CardHeader>

      <CardBody className="pt-0 pb-6">
        <p className="text-sm leading-[1.72] text-secondary-text">
          {item.description}
        </p>
      </CardBody>
    </Card>
  );
}
