import { BookOpen } from "lucide-react";
import type {
  AcademicResource,
  ResourceCategoryItem,
} from "@/data/teaching-and-resources";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ResourceCategoryCard } from "@/components/teaching/ResourceCategoryCard";
import { ResourceCard } from "@/components/teaching/ResourceCard";

export interface ResourceLibraryProps {
  categories: readonly ResourceCategoryItem[];
  resources: readonly AcademicResource[];
  emptyMessage?: string;
}

export function ResourceLibrary({
  categories,
  resources,
  emptyMessage = "Academic resources will be added here as they become available.",
}: ResourceLibraryProps) {
  return (
    <div className="space-y-8">
      {/* Structured Category Landing Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <ResourceCategoryCard key={category.code} category={category} />
        ))}
      </div>

      {/* Resource Catalogue or Graceful Empty State */}
      {resources.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      ) : (
        <Card
          surface="white"
          accentTop
          accentTone="purple"
          className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-purple/25"
        >
          <div className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple/30 bg-soft-purple text-purple">
              <BookOpen aria-hidden="true" className="h-5 w-5" />
            </span>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-navy">
                Resource Repository Status
              </p>
              <p className="font-serif text-lg font-semibold text-deep-navy">
                {emptyMessage}
              </p>
              <p className="text-xs sm:text-sm text-secondary-text">
                The resource schema supports categorized guides, downloadable
                files, attribution, and publication dates when authored
                materials are supplied.
              </p>
            </div>
          </div>

          <Badge variant="purple" className="self-start sm:self-center shrink-0">
            Repository Prepared
          </Badge>
        </Card>
      )}
    </div>
  );
}
