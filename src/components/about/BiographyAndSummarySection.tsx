import { FileCheck2 } from "lucide-react";
import {
  ABOUT_BIOGRAPHY_PARAGRAPHS,
  ABOUT_PROFILE_SUMMARY,
} from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function BiographyAndSummarySection() {
  return (
    <section
      id="biography"
      aria-labelledby="biography-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Left Column: Detailed Professional Biography */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                id="biography-heading"
                eyebrow="Professional Biography"
                title="Academic Formation & Corpus Inquiry"
                accent="navy"
              />

              <div className="space-y-4 text-[0.975rem] sm:text-[1.03125rem] leading-[1.82] text-secondary-text">
                {ABOUT_BIOGRAPHY_PARAGRAPHS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Soft-Blue & Navy Academic Profile Summary Panel */}
            <aside
              aria-labelledby="profile-summary-heading"
              className="lg:col-span-5"
            >
              <Card
                surface="blue"
                accentTop
                accentTone="navy"
                className="overflow-hidden"
              >
                <CardHeader className="flex items-center gap-3 border-b border-primary-navy/15 pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-navy/20 bg-pure-white text-primary-navy">
                    <FileCheck2 aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2
                      id="profile-summary-heading"
                      className="font-serif text-lg sm:text-xl font-semibold text-deep-navy"
                    >
                      Academic Profile Summary
                    </h2>
                    <p className="text-xs font-medium text-primary-navy">
                      Verified Curriculum Vitae Record
                    </p>
                  </div>
                </CardHeader>

                <CardBody className="py-5">
                  <dl className="divide-y divide-primary-navy/15">
                    {ABOUT_PROFILE_SUMMARY.map((item) => (
                      <div
                        key={item.label}
                        className="py-3 first:pt-1 last:pb-1 space-y-0.5"
                      >
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-primary-navy/85">
                          {item.label}
                        </dt>
                        <dd className="text-sm font-semibold text-deep-navy">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </CardBody>
              </Card>
            </aside>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
