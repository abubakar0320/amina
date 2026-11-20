import {
  AlignCenter,
  Database,
  GitCompare,
  ListFilter,
  Search,
  Tag,
} from "lucide-react";
import type { AcademicToolRelevanceItem } from "@/data/teaching-and-resources";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const TOOL_ICONS: Record<
  AcademicToolRelevanceItem["iconName"],
  typeof Search
> = {
  Search,
  Tag,
  Database,
  ListFilter,
  AlignCenter,
  GitCompare,
};

export interface AcademicToolsCardProps {
  tool: AcademicToolRelevanceItem;
}

export function AcademicToolsCard({ tool }: AcademicToolsCardProps) {
  const IconComponent = TOOL_ICONS[tool.iconName];

  return (
    <Card
      as="article"
      surface="white"
      interactive
      accentTone="teal"
      className="flex flex-col justify-between"
    >
      <div>
        <CardHeader className="space-y-3.5 pb-2">
          <div className="flex items-center justify-between gap-2.5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-teal/30 bg-soft-teal text-teal transition-colors group-hover:bg-teal group-hover:text-pure-white">
              <IconComponent aria-hidden="true" className="h-4 w-4" />
            </span>
            <Badge variant="teal">{tool.kind}</Badge>
          </div>

          <h3 className="font-serif text-lg font-semibold leading-snug text-deep-navy">
            {tool.name}
          </h3>
        </CardHeader>

        <CardBody className="pt-0 pb-6">
          <p className="text-sm leading-[1.7] text-secondary-text">
            {tool.relevance}
          </p>
        </CardBody>
      </div>
    </Card>
  );
}
