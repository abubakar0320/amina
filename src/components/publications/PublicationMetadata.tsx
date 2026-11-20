import {
  BookOpenCheck,
  Calendar,
  FileBadge,
  Hash,
  Layers,
  UserRound,
} from "lucide-react";
import type { ScholarlyPublication } from "@/data/publications-and-profiles";
import { cn } from "@/lib/utils";

export interface PublicationMetadataProps {
  publication: ScholarlyPublication;
  variant?: "sidebar" | "grid";
  className?: string;
}

export function PublicationMetadata({
  publication,
  variant = "sidebar",
  className,
}: PublicationMetadataProps) {
  const entries = [
    {
      icon: UserRound,
      label: "Author",
      value: publication.authors.join(", "),
    },
    {
      icon: BookOpenCheck,
      label: "Journal",
      value: publication.journal,
    },
    {
      icon: Layers,
      label: "Volume & Issue",
      value: `Volume ${publication.volume}, Issue ${publication.issue}`,
    },
    {
      icon: FileBadge,
      label: "Pages",
      value: publication.pages,
    },
    {
      icon: Calendar,
      label: "Publication Date",
      value: publication.publishedDate,
    },
    ...(publication.doi
      ? [
          {
            icon: Hash,
            label: "DOI",
            value: publication.doi,
          },
        ]
      : []),
  ];

  return (
    <dl
      className={cn(
        variant === "grid"
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          : "space-y-4",
        className
      )}
    >
      {entries.map((entry) => {
        const IconComponent = entry.icon;
        return (
          <div key={entry.label} className="flex items-start gap-3">
            <IconComponent
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-teal"
            />
            <div className="min-w-0">
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                {entry.label}
              </dt>
              <dd className="mt-0.5 text-sm font-semibold text-deep-navy break-words">
                {entry.value}
              </dd>
            </div>
          </div>
        );
      })}
    </dl>
  );
}
