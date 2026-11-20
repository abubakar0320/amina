import Link from "next/link";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import type { ScholarlyPublication } from "@/data/publications-and-profiles";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { ExternalAcademicLink } from "@/components/publications/ExternalAcademicLink";

export interface PublicationCardProps {
  publication: ScholarlyPublication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const detailHref = `/publications/${publication.slug}`;

  return (
    <Card
      as="article"
      surface="white"
      interactive
      accentTop
      accentTone="navy"
      className="flex flex-col justify-between border-primary-navy/20"
    >
      <div>
        <CardHeader className="space-y-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="navy">{publication.type}</Badge>
              <Badge variant="blue" dot>
                {publication.year}
              </Badge>
              <Badge variant="teal">{publication.category}</Badge>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary-text">
              <Calendar aria-hidden="true" className="h-3.5 w-3.5 text-primary-navy" />
              <span>{publication.publishedDate}</span>
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-[1.3] text-deep-navy">
            <Link
              href={detailHref}
              className="hover:underline decoration-primary-navy decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal rounded-sm"
            >
              {publication.title}
            </Link>
          </h3>
        </CardHeader>

        <CardBody className="space-y-3">
          <p className="text-sm text-secondary-text">
            <span className="font-semibold text-deep-navy">
              {publication.authors.join(", ")}
            </span>{" "}
            &middot; <span className="italic">{publication.journal}</span>, Vol.{" "}
            {publication.volume}({publication.issue}), pp. {publication.pages}.
          </p>

          {publication.doi && (
            <p className="text-xs font-medium text-secondary-text">
              DOI: {publication.doi}
            </p>
          )}
        </CardBody>
      </div>

      <CardFooter className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href={detailHref} variant="secondary" size="sm" className="group">
            <FileText aria-hidden="true" className="h-3.5 w-3.5 text-primary-navy" />
            <span>Publication Details</span>
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </ButtonLink>

          {publication.externalUrl && (
            <ExternalAcademicLink
              href={publication.externalUrl}
              label="View Published Article"
              ariaLabel={`View published article: ${publication.title}`}
              variant="outline"
              size="sm"
            />
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
