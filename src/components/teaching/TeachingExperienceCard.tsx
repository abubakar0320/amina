import { Building2, MapPin } from "lucide-react";
import type { TeachingPositionItem } from "@/data/teaching-and-resources";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export interface TeachingExperienceCardProps {
  position: TeachingPositionItem;
  featured?: boolean;
}

export function TeachingExperienceCard({
  position,
  featured = false,
}: TeachingExperienceCardProps) {
  return (
    <Card
      as="article"
      surface={featured ? "gold" : "cool"}
      interactive
      accentTop={featured}
      accentTone="gold"
      className="p-6 flex flex-col justify-between space-y-5"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-golden-yellow/80 bg-pure-white text-deep-navy">
            <Building2 aria-hidden="true" className="h-5 w-5" />
          </span>
          <Badge
            variant={featured ? "gold" : "outline"}
            className={featured ? undefined : "bg-pure-white text-deep-navy"}
          >
            {position.appointmentType}
          </Badge>
        </div>

        <div className="space-y-1.5">
          <h3 className="font-serif text-xl font-semibold leading-snug text-deep-navy">
            {position.role}
          </h3>
          <p className="text-sm sm:text-[0.95rem] font-semibold text-primary-navy">
            {position.institution}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1.5 border-t border-border-subtle pt-3.5 text-xs sm:text-sm text-main-text/80">
        <MapPin
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0 text-terracotta"
        />
        <span>{position.location}</span>
      </div>
    </Card>
  );
}
