import { Download, Mail } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import {
  PRIMARY_ACADEMIC_PROFILES,
  getVerifiedExtensibleProfiles,
} from "@/data/publications-and-profiles";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchProfileCard } from "@/components/publications/ResearchProfileCard";

export function AcademicProfilesSection() {
  const verifiedExtensibleProfiles = getVerifiedExtensibleProfiles();

  return (
    <section
      id="academic-profiles"
      aria-labelledby="academic-profiles-heading"
      className="border-t border-primary-navy/15 bg-soft-blue/70 py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      <Container>
        <Reveal className="space-y-10 sm:space-y-12">
          <SectionHeading
            id="academic-profiles-heading"
            eyebrow="Researcher Identity"
            title="Find Me on Academic Platforms"
            description="Authentic scholarly profile cards configured to publish external platform links only once official identifiers and URLs are verified."
            accent="navy"
          />

          {/* Three Primary Academic Platform Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PRIMARY_ACADEMIC_PROFILES.map((profile) => (
              <ResearchProfileCard key={profile.id} profile={profile} />
            ))}
          </div>

          {/* Extensible Academic Identifiers (rendered strictly when verified) */}
          {verifiedExtensibleProfiles.length > 0 && (
            <div className="space-y-5 pt-4">
              <h3 className="font-serif text-xl font-semibold text-deep-navy">
                Additional Verified Academic Identifiers
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {verifiedExtensibleProfiles.map((profile) => (
                  <ResearchProfileCard key={profile.id} profile={profile} />
                ))}
              </div>
            </div>
          )}

          {/* Deep Navy Verified Direct Academic Access Bar */}
          <div className="rounded-2xl border border-primary-navy bg-deep-navy text-pure-white p-6 sm:p-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between shadow-[var(--shadow-card)]">
            <div className="space-y-1 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-golden-yellow">
                Direct Verified Contact &amp; Credentials
              </p>
              <p className="text-sm leading-relaxed text-soft-blue">
                Until external platform links are supplied, researchers and
                admission committees may download the complete Academic CV or
                write directly to{" "}
                <span className="font-semibold text-pure-white">
                  {ACADEMIC_IDENTITY.email}
                </span>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <ButtonLink
                href={ACADEMIC_IDENTITY.cvPath}
                download={ACADEMIC_IDENTITY.cvFileName}
                variant="outlineOnDark"
                size="md"
              >
                <Download
                  aria-hidden="true"
                  className="h-4 w-4 text-golden-yellow"
                />
                <span>Download Academic CV</span>
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="terracotta"
                size="md"
              >
                <Mail aria-hidden="true" className="h-4 w-4 text-terracotta" />
                <span>Email Amina</span>
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
