import Link from "next/link";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import {
  ACADEMIC_IDENTITY,
  FEATURED_PUBLICATION,
  RESEARCH_INTEREST_AREAS,
} from "@/data/academic-profile";
import { FOOTER_COLUMNS } from "@/config/navigation";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-primary-navy bg-deep-navy text-pure-white">
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-gradient-to-r from-teal via-primary-navy to-terracotta"
      />
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Academic Brand Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <Link
                href="/"
                className="inline-block font-serif text-lg font-semibold tracking-[0.14em] text-pure-white"
              >
                {ACADEMIC_IDENTITY.wordmark}
              </Link>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-golden-yellow">
                {ACADEMIC_IDENTITY.designation}
              </p>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-soft-blue/90">
              Specializing in Applied Linguistics, Corpus Linguistics, and
              English Language Teaching with an emphasis on learner-corpus
              colligation and academic writing.
            </p>

            <ul className="space-y-2.5 pt-1 text-sm text-soft-blue/90">
              <li className="flex items-center gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-terracotta"
                />
                <span>{ACADEMIC_IDENTITY.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${ACADEMIC_IDENTITY.email}`}
                  className="inline-flex items-center gap-2.5 text-pure-white font-medium hover:underline decoration-terracotta underline-offset-4"
                >
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-terracotta"
                  />
                  <span>{ACADEMIC_IDENTITY.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columns 2 & 3: Quick Navigation */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading} className="lg:col-span-2 space-y-3.5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-pure-white">
                {column.heading}
              </h2>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-soft-blue/85 transition-colors hover:text-pure-white hover:underline decoration-golden-yellow underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Research Areas & Verified Resources */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-pure-white">
              Research Areas &amp; Resources
            </h2>

            <div className="flex flex-wrap gap-2">
              {RESEARCH_INTEREST_AREAS.map((area) => (
                <Link
                  key={area.id}
                  href="/research"
                  className="inline-flex min-h-[32px] items-center rounded-full border border-pure-white/20 bg-primary-navy/70 px-3 py-1 text-xs font-medium text-pure-white transition-colors hover:border-golden-yellow hover:bg-primary-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-golden-yellow"
                >
                  {area.title}
                </Link>
              ))}
            </div>

            <div className="rounded-2xl border border-pure-white/15 bg-primary-navy/65 p-4 space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-soft-blue">
                Verified Academic Documents
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium">
                <a
                  href={ACADEMIC_IDENTITY.cvPath}
                  download={ACADEMIC_IDENTITY.cvFileName}
                  className="inline-flex items-center gap-1.5 text-pure-white hover:underline decoration-golden-yellow underline-offset-4"
                >
                  <Download aria-hidden="true" className="h-3.5 w-3.5 text-golden-yellow" />
                  <span>Download CV (PDF)</span>
                </a>
                <a
                  href={FEATURED_PUBLICATION.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-pure-white hover:underline decoration-golden-yellow underline-offset-4"
                >
                  <span>2026 Journal Article</span>
                  <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 text-golden-yellow" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-pure-white/15 pt-6 text-xs text-soft-blue/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {ACADEMIC_IDENTITY.copyrightYear}{" "}
            <span className="font-medium text-pure-white">
              {ACADEMIC_IDENTITY.fullName}
            </span>
            . All rights reserved.
          </p>
          <p className="text-soft-blue/85">
            {ACADEMIC_IDENTITY.specializationHeadline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
