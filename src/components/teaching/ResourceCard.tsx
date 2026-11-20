import { ArrowUpRight, Calendar, Download, FileText } from "lucide-react";
import type { AcademicResource } from "@/data/teaching-and-resources";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export interface ResourceCardProps {
  resource: AcademicResource;
}

/**
 * Scalable resource item card supporting external or downloadable study materials.
 */
export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card
      as="article"
      surface="white"
      interactive
      accentTone="purple"
      className="flex flex-col justify-between"
    >
      <div>
        <CardHeader className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant="purple">{resource.categoryLabel}</Badge>
            <Badge variant="cool">{resource.resourceType}</Badge>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-semibold leading-snug text-deep-navy">
            {resource.title}
          </h3>
        </CardHeader>

        <CardBody className="space-y-3 pt-0">
          <p className="text-sm leading-relaxed text-secondary-text">
            {resource.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-secondary-text">
            <span>Attribution: {resource.authorAttribution}</span>
            <span className="inline-flex items-center gap-1">
              <Calendar aria-hidden="true" className="h-3.5 w-3.5 text-purple" />
              {resource.date}
            </span>
          </div>

          {resource.tags && resource.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {resource.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardBody>
      </div>

      <CardFooter>
        <ButtonLink
          href={resource.href}
          external={resource.isExternal}
          download={resource.isDownload ? true : undefined}
          variant="purple"
          size="sm"
        >
          {resource.isDownload ? (
            <Download aria-hidden="true" className="h-3.5 w-3.5" />
          ) : (
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />
          )}
          <span>
            {resource.isDownload ? "Download Resource" : "Open Resource"}
          </span>
          {resource.isExternal && (
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          )}
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
