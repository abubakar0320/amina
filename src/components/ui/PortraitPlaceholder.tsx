import { ImageIcon, MapPin } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { cn } from "@/lib/utils";

export interface PortraitPlaceholderProps {
  className?: string;
}

/**
 * Editorial academic portrait frame reserving space for an authentic photograph.
 * Uses deep navy and soft blue architectural geometry with crisp white framing.
 */
export function PortraitPlaceholder({ className }: PortraitPlaceholderProps) {
  return (
    <figure
      className={cn(
        "group animate-portrait-reveal relative mx-auto w-full max-w-[26rem] lg:max-w-[29rem]",
        className
      )}
    >
      {/* Subtle geometric soft-blue & teal/gold architectural framing shapes */}
      <div
        aria-hidden="true"
        className="absolute -right-3 -top-3 h-28 w-28 rounded-3xl bg-soft-blue/90 border border-primary-navy/20 transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:translate-x-0.5 [@media(hover:hover)]:group-hover:-translate-y-0.5 motion-reduce:transform-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-3 -left-3 h-36 w-36 rounded-[2rem] bg-soft-teal border border-teal/25 transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:-translate-x-0.5 [@media(hover:hover)]:group-hover:translate-y-0.5 motion-reduce:transform-none"
      />

      {/* Main rounded editorial frame */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border-subtle bg-pure-white p-3.5 sm:p-4 shadow-[var(--shadow-card)] transition-all duration-300 [@media(hover:hover)]:group-hover:border-primary-navy/40 [@media(hover:hover)]:group-hover:shadow-[var(--shadow-card-hover)] motion-reduce:transition-none">
        <div
          className="relative flex aspect-[4/4.85] flex-col justify-between overflow-hidden rounded-[1.35rem] border border-primary-navy/15 bg-soft-blue px-6 py-7 sm:px-8 sm:py-8"
          role="img"
          aria-label="Academic portrait placeholder slot for Amina Mumtaz until an authentic photograph is supplied"
        >
          {/* Subtle top editorial hairline & metadata */}
          <div className="flex items-center justify-between gap-2 border-b border-primary-navy/15 pb-3.5 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-main-text/80">
            <span>Portrait Slot</span>
            <span className="inline-flex items-center gap-1.5 text-deep-navy">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-teal"
              />
              MPhil · GCUF
            </span>
          </div>

          {/* Central editorial portrait seal & placeholder cue */}
          <div className="my-auto flex flex-col items-center py-4 text-center">
            <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 items-center justify-center rounded-full border-2 border-golden-yellow/75 bg-pure-white shadow-xs transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:scale-[1.02] motion-reduce:transform-none">
              <div className="flex h-26 w-26 sm:h-28 sm:w-28 flex-col items-center justify-center rounded-full border border-primary-navy bg-deep-navy text-pure-white">
                <span className="font-serif text-3xl sm:text-[2.125rem] font-semibold tracking-[0.1em] text-pure-white">
                  AM
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-[0.625rem] font-medium uppercase tracking-[0.14em] text-soft-blue">
                  <ImageIcon aria-hidden="true" className="h-3 w-3 text-golden-yellow" />
                  Photo Slot
                </span>
              </div>
            </div>

            <div className="mt-5 space-y-1.5 max-w-[17.5rem]">
              <p className="font-serif text-xl font-semibold text-deep-navy">
                {ACADEMIC_IDENTITY.fullName}
              </p>
              <p className="text-xs font-medium text-primary-navy">
                {ACADEMIC_IDENTITY.designation}
              </p>
              <p className="pt-1 text-xs leading-relaxed text-main-text/85">
                Authentic academic portrait reserved for verified faculty
                photography.
              </p>
            </div>
          </div>

          {/* Bottom discipline & location caption */}
          <figcaption className="rounded-xl border border-primary-navy/15 bg-pure-white px-4 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0 text-left">
              <p className="truncate text-xs font-semibold text-deep-navy">
                Applied &amp; Corpus Linguistics
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-[0.6875rem] text-secondary-text">
                <MapPin aria-hidden="true" className="h-3 w-3 shrink-0 text-teal" />
                <span className="truncate">{ACADEMIC_IDENTITY.location}</span>
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-golden-yellow/80 bg-soft-gold px-2.5 py-0.5 text-[0.6875rem] font-semibold text-deep-navy">
              ELT
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
