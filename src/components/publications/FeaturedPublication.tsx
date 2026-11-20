import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { ScholarlyPublication } from "@/data/publications-and-profiles";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { ExternalAcademicLink } from "@/components/publications/ExternalAcademicLink";
import { PublicationMetadata } from "@/components/publications/PublicationMetadata";

export interface FeaturedPublicationProps {
  publication: ScholarlyPublication;
}

export function FeaturedPublication({ publication }: FeaturedPublicationProps) {
  const detailHref = `/publications/${publication.slug}`;

  return (
    <Card
      as="article"
      surface="white"
      accentTop
      accentTone="navy"
      className="overflow-hidden border-primary-navy/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Main Editorial Publication Column */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <CardHeader className="space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="navy">{publication.type}</Badge>
                <Badge variant="teal" dot>
                  {publication.category}
                </Badge>
                <Badge variant="blue">{publication.year}</Badge>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.875rem] font-semibold leading-[1.26] text-deep-navy">
                <Link
                  href={detailHref}
                  className="hover:underline decoration-primary-navy decoration-2 underline-offset-4 rounded-sm"
                >
                  {publication.title}
                </Link>
              </h3>
            </CardHeader>

            <CardBody className="space-y-5">
              <div className="rounded-xl border border-primary-navy/15 bg-soft-blue/65 p-4 sm:p-5">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary-navy mb-1.5">
                  Verified Citation Record
                </p>
                <p className="text-sm leading-[1.7] text-deep-navy">
                  {publication.citation}
                </p>
              </div>

              <p className="text-sm leading-[1.75] text-secondary-text">
                {publication.overviewNotes[0]}
              </p>
            </CardBody>
          </div>

          <CardFooter className="flex flex-wrap items-center gap-3">
            {publication.externalUrl && (
              <ExternalAcademicLink
                href={publication.externalUrl}
                label="View Published Article"
                ariaLabel={`View published article on external journal site: ${publication.title}`}
                variant="primary"
                size="lg"
              />
            )}

            <ButtonLink
              href={detailHref}
              variant="secondary"
              size="lg"
              className="group"
            >
              <FileText aria-hidden="true" className="h-4 w-4 text-primary-navy" />
              <span>View Publication Details</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </ButtonLink>
          </CardFooter>
        </div>

        {/* Structured Publication Metadata Sidebar (Soft Blue + Navy Accents) */}
        <aside
          aria-label="Featured publication metadata"
          className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-primary-navy/15 bg-soft-blue/75 p-6 sm:p-7 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-navy">
              Publication Details
            </p>
            <PublicationMetadata publication={publication} variant="sidebar" />
          </div>

          <div className="rounded-xl border border-primary-navy/20 bg-pure-white px-4 py-3 text-xs leading-relaxed text-deep-navy">
            All bibliographic metadata reflects the verified record in Amina
            Mumtaz&apos;s Academic Curriculum Vitae.
          </div>
        </aside>
      </div>
    </Card>
  );
}
