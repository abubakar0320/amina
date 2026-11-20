import {
  Compass,
  DatabaseSearch,
  GraduationCap,
  Languages,
} from "lucide-react";
import type { ResourceCategoryItem } from "@/data/teaching-and-resources";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const CATEGORY_ICONS: Record<
  ResourceCategoryItem["iconName"],
  typeof DatabaseSearch
> = {
  DatabaseSearch,
  Languages,
  GraduationCap,
  Compass,
};

export interface ResourceCategoryCardProps {
  category: ResourceCategoryItem;
}

export function ResourceCategoryCard({ category }: ResourceCategoryCardProps) {
  const IconComponent = CATEGORY_ICONS[category.iconName];

  return (
    <Card
      as="article"
      surface="white"
      interactive
      accentTone="purple"
      className="flex flex-col justify-between"
    >
      <div>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between gap-2.5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-purple/30 bg-soft-purple text-purple transition-colors group-hover:bg-purple group-hover:text-pure-white">
              <IconComponent aria-hidden="true" className="h-5 w-5" />
            </span>
            <Badge variant="purple">Category {category.code}</Badge>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-deep-navy">
            {category.title}
          </h3>
        </CardHeader>

        <CardBody className="pt-0 pb-6">
          <ul className="space-y-2 border-t border-border-subtle pt-4">
            {category.topics.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-2 text-sm leading-relaxed text-secondary-text"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple"
                />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </div>
    </Card>
  );
}
