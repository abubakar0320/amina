import { CORPUS_DATASET_SUMMARY } from "@/data/academic-profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export function CorpusDatasetSection() {
  return (
    <section
      id="corpus-dataset"
      aria-labelledby="corpus-dataset-heading"
      className="bg-pure-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="corpus-dataset-heading"
            eyebrow="Corpus Overview"
            title="Research Dataset & Corpus"
            description={CORPUS_DATASET_SUMMARY.explanation}
            accent="teal"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
            {/* Left: Verified Dataset Counts (Navy + Soft Blue + Soft Teal) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card
                surface="navy"
                accentTop
                accentTone="teal"
                interactive
                className="sm:col-span-2 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-golden-yellow">
                      Total Writing Samples Analysed
                    </p>
                    <p className="mt-2 font-serif text-4xl sm:text-5xl font-semibold text-pure-white">
                      {CORPUS_DATASET_SUMMARY.totalSamples}
                    </p>
                  </div>
                  <Badge variant="gold">
                    {CORPUS_DATASET_SUMMARY.corpusName}
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-soft-blue/90">
                  Balanced comparative corpus drawn from{" "}
                  <span className="font-semibold text-pure-white">
                    {CORPUS_DATASET_SUMMARY.corpusName}
                  </span>{" "}
                  for MPhil colligation analysis.
                </p>
              </Card>

              <Card surface="blue" interactive accentTone="navy" className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-primary-navy"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-navy">
                    Group 01
                  </span>
                </div>
                <p className="font-serif text-3xl font-semibold text-deep-navy">
                  {CORPUS_DATASET_SUMMARY.pakistaniSamples}
                </p>
                <p className="text-sm font-medium text-deep-navy">
                  Pakistani learner samples
                </p>
              </Card>

              <Card surface="teal" interactive accentTone="teal" className="p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-teal"
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-navy">
                    Group 02
                  </span>
                </div>
                <p className="font-serif text-3xl font-semibold text-deep-navy">
                  {CORPUS_DATASET_SUMMARY.nativeSamples}
                </p>
                <p className="text-sm font-medium text-deep-navy">
                  Native-speaker samples
                </p>
              </Card>
            </div>

            {/* Right: Lightweight Custom SVG 50/50 Comparison Chart */}
            <Card
              surface="white"
              accentTop
              accentTone="teal"
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <CardHeader className="border-b border-border-subtle pb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-deep-navy">
                    50 / 50 Corpus Sample Comparison
                  </h3>
                  <p className="text-xs text-secondary-text">
                    ICNALE V2.0 sample distribution across comparative groups
                  </p>
                </div>
                <Badge variant="teal">n = 800 samples</Badge>
              </CardHeader>

              <CardBody className="py-6 space-y-6">
                <figure className="space-y-5">
                  {/* Accessible Custom SVG Chart (Navy & Teal) */}
                  <svg
                    viewBox="0 0 600 215"
                    className="w-full h-auto overflow-visible"
                    role="img"
                    aria-labelledby="corpus-chart-title corpus-chart-desc"
                  >
                    <title id="corpus-chart-title">
                      ICNALE V2.0 Comparative Dataset Split: 400 Pakistani Learner
                      Samples and 400 Native-Speaker Samples
                    </title>
                    <desc id="corpus-chart-desc">
                      Equal 50/50 distribution of 800 English writing samples:
                      400 Pakistani learner samples (50%) and 400 native-speaker
                      samples (50%).
                    </desc>

                    {/* Top 50/50 Proportional Composition Bar */}
                    <text
                      x="0"
                      y="18"
                      fill="#667085"
                      fontSize="12"
                      fontWeight="600"
                    >
                      PROPORTIONAL CORPUS COMPOSITION (800 SAMPLES)
                    </text>

                    <rect
                      x="0"
                      y="30"
                      width="298"
                      height="34"
                      rx="8"
                      fill="#253B70"
                    />
                    <rect
                      x="302"
                      y="30"
                      width="298"
                      height="34"
                      rx="8"
                      fill="#0D635F"
                      stroke="#094A47"
                      strokeWidth="1.25"
                    />
                    <text
                      x="149"
                      y="52"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="13"
                      fontWeight="600"
                    >
                      Pakistani Learners · 400 (50%)
                    </text>
                    <text
                      x="451"
                      y="52"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="13"
                      fontWeight="600"
                    >
                      Native Speakers · 400 (50%)
                    </text>

                    {/* Horizontal Comparison Bars by Sample Count */}
                    <text
                      x="0"
                      y="98"
                      fill="#667085"
                      fontSize="12"
                      fontWeight="600"
                    >
                      SAMPLE COUNT BY GROUP
                    </text>

                    {/* Row 1: Pakistani Learner Samples */}
                    <text
                      x="0"
                      y="124"
                      fill="#192B50"
                      fontSize="13"
                      fontWeight="600"
                    >
                      Pakistani learner samples
                    </text>
                    <rect
                      x="0"
                      y="133"
                      width="520"
                      height="20"
                      rx="6"
                      fill="#F2F5FA"
                      stroke="#E3E8F0"
                    />
                    <rect
                      x="0"
                      y="133"
                      width="416"
                      height="20"
                      rx="6"
                      fill="#253B70"
                    />
                    <text
                      x="534"
                      y="148"
                      fill="#192B50"
                      fontSize="14"
                      fontWeight="700"
                    >
                      400
                    </text>

                    {/* Row 2: Native-Speaker Samples */}
                    <text
                      x="0"
                      y="178"
                      fill="#192B50"
                      fontSize="13"
                      fontWeight="600"
                    >
                      Native-speaker samples
                    </text>
                    <rect
                      x="0"
                      y="187"
                      width="520"
                      height="20"
                      rx="6"
                      fill="#F2F5FA"
                      stroke="#E3E8F0"
                    />
                    <rect
                      x="0"
                      y="187"
                      width="416"
                      height="20"
                      rx="6"
                      fill="#0D635F"
                    />
                    <text
                      x="534"
                      y="202"
                      fill="#192B50"
                      fontSize="14"
                      fontWeight="700"
                    >
                      400
                    </text>
                  </svg>

                  {/* Accessible Legend */}
                  <figcaption className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-4 text-xs text-secondary-text">
                    <div className="flex flex-wrap items-center gap-5">
                      <span className="inline-flex items-center gap-2 font-medium text-deep-navy">
                        <span
                          aria-hidden="true"
                          className="h-3 w-3 rounded-sm bg-primary-navy"
                        />
                        Pakistani Learners: 400 (50%)
                      </span>
                      <span className="inline-flex items-center gap-2 font-medium text-deep-navy">
                        <span
                          aria-hidden="true"
                          className="h-3 w-3 rounded-sm bg-teal"
                        />
                        Native Speakers: 400 (50%)
                      </span>
                    </div>
                    <span>Source: ICNALE V2.0</span>
                  </figcaption>
                </figure>
              </CardBody>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
