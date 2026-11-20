import {
  ArrowUpRight,
  BookOpenCheck,
  Calendar,
  FileText,
  Layers,
  UserRound,
} from "lucide-react";
import { FEATURED_PUBLICATION } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedPublicationSection() {
  return (
    <section
      id="featured-publication"
      aria-labelledby="featured-publication-heading"
      className="bg-soft-blue py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="featured-publication-heading"
            eyebrow="Peer-Reviewed Research"
            title="Featured Research Publication"
            description="Published peer-reviewed empirical research comparing colligational patterns between native English speakers and Pakistani learners."
            accent="navy"
          />

          <Card
            as="article"
            surface="white"
            accentTop
            accentTone="navy"
            className="overflow-hidden border-primary-navy/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Primary Article Overview */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="navy">
                        {FEATURED_PUBLICATION.statusLabel}
                      </Badge>
                      <Badge variant="blue" dot>
                        {FEATURED_PUBLICATION.year}
                      </Badge>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] font-semibold leading-[1.28] text-deep-navy">
                      {FEATURED_PUBLICATION.title}
                    </h3>
                  </CardHeader>

                  <CardBody className="space-y-5">
                    <div className="rounded-xl border border-primary-navy/15 bg-soft-blue/65 p-4 sm:p-5">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary-navy mb-1.5">
                        Verified Bibliographic Citation
                      </p>
                      <p className="text-sm leading-[1.7] text-deep-navy">
                        {FEATURED_PUBLICATION.citation}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {FEATURED_PUBLICATION.focusTags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardBody>
                </div>

                <CardFooter className="flex flex-wrap items-center justify-between gap-4">
                  <ButtonLink
                    href={FEATURED_PUBLICATION.url}
                    external
                    variant="primary"
                    size="lg"
                    className="group"
                  >
                    <FileText
                      aria-hidden="true"
                      className="h-4 w-4 text-soft-blue"
                    />
                    <span>View Published Article</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 text-soft-blue transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </ButtonLink>

                  <span className="text-xs font-medium text-secondary-text">
                    External open-access journal record
                  </span>
                </CardFooter>
              </div>

              {/* Structured Navy Publication Metadata Sidebar */}
              <aside
                aria-label="Publication metadata"
                className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-primary-navy bg-deep-navy text-pure-white p-6 sm:p-7 flex flex-col justify-between gap-6"
              >
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-golden-yellow">
                    Publication Metadata
                  </p>

                  <dl className="space-y-4">
                    <div className="flex items-start gap-3">
                      <UserRound
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-golden-yellow"
                      />
                      <div>
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-wider text-soft-blue/80">
                          Author
                        </dt>
                        <dd className="text-sm font-semibold text-pure-white">
                          {FEATURED_PUBLICATION.author}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <BookOpenCheck
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-golden-yellow"
                      />
                      <div>
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-wider text-soft-blue/80">
                          Journal
                        </dt>
                        <dd className="text-sm font-semibold text-pure-white">
                          {FEATURED_PUBLICATION.journal}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Layers
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-golden-yellow"
                      />
                      <div>
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-wider text-soft-blue/80">
                          Volume &amp; Pages
                        </dt>
                        <dd className="text-sm font-medium text-pure-white">
                          Volume {FEATURED_PUBLICATION.volumeIssue}, pp.{" "}
                          {FEATURED_PUBLICATION.pages}
                        </dd>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-golden-yellow"
                      />
                      <div>
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-wider text-soft-blue/80">
                          Publication Date
                        </dt>
                        <dd className="text-sm font-medium text-pure-white">
                          {FEATURED_PUBLICATION.publishedDate}
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="rounded-xl border border-pure-white/15 bg-primary-navy/70 px-4 py-3 text-xs leading-relaxed text-soft-blue">
                  Published peer-reviewed article derived from corpus-based
                  comparative investigation of learner English.
                </div>
              </aside>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
