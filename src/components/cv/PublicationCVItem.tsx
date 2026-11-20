import Link from "next/link";
import { ArrowUpRight, Calendar, FileText } from "lucide-react";
import type { ScholarlyPublication } from "@/data/publications-and-profiles";

export interface PublicationCVItemProps {
  publication: ScholarlyPublication;
}

export function PublicationCVItem({ publication }: PublicationCVItemProps) {
  return (
    <article className="rounded-xl border border-primary-navy/20 bg-soft-blue/55 p-4 sm:p-5 space-y-3">
      <p className="text-sm sm:text-[0.95rem] leading-[1.7] text-deep-navy">
        <span className="font-semibold">{publication.citation}</span>
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs text-primary-navy/85">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Calendar aria-hidden="true" className="h-3.5 w-3.5 text-primary-navy" />
          <span>Published: {publication.publishedDate}</span>
        </span>

        <div className="no-print flex flex-wrap items-center gap-4 font-medium">
          <Link
            href={`/publications/${publication.slug}`}
            className="inline-flex items-center gap-1 text-deep-navy hover:underline decoration-primary-navy underline-offset-4"
          >
            <FileText aria-hidden="true" className="h-3.5 w-3.5 text-teal" />
            <span>View Details</span>
          </Link>

          {publication.externalUrl && (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-deep-navy hover:underline decoration-primary-navy underline-offset-4"
            >
              <span>View Published Article</span>
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-primary-navy" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
