"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";

export function ContactInformationCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(ACADEMIC_IDENTITY.email);
      } else {
        const input = document.createElement("textarea");
        input.value = ACADEMIC_IDENTITY.email;
        input.setAttribute("readonly", "");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Card
      surface="navy"
      accentTop
      accentTone="terracotta"
      className="overflow-hidden"
    >
      <CardHeader className="border-b border-pure-white/15 pb-4">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-golden-yellow">
          Direct Academic Contact
        </p>
        <h2 className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-pure-white">
          Contact Information
        </h2>
      </CardHeader>

      <CardBody className="py-6 space-y-5">
        <dl className="space-y-4">
          {/* Email */}
          <div className="rounded-xl border border-pure-white/15 bg-primary-navy/75 p-4 flex items-start gap-3.5">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-terracotta/65 bg-deep-navy text-terracotta">
              <Mail aria-hidden="true" className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-soft-blue/85">
                Email Address
              </dt>
              <dd className="mt-0.5 text-sm sm:text-[0.95rem] font-semibold text-pure-white break-all">
                <a
                  href={`mailto:${ACADEMIC_IDENTITY.email}`}
                  className="hover:underline decoration-terracotta underline-offset-4"
                >
                  {ACADEMIC_IDENTITY.email}
                </a>
              </dd>
            </div>
          </div>

          {/* Phone */}
          <div className="rounded-xl border border-pure-white/15 bg-primary-navy/75 p-4 flex items-start gap-3.5">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-terracotta/65 bg-deep-navy text-terracotta">
              <Phone aria-hidden="true" className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-soft-blue/85">
                Phone (Pakistan)
              </dt>
              <dd className="mt-0.5 text-sm sm:text-[0.95rem] font-semibold text-pure-white">
                <a
                  href={ACADEMIC_IDENTITY.phoneHref}
                  className="hover:underline decoration-terracotta underline-offset-4"
                >
                  {ACADEMIC_IDENTITY.phone}
                </a>
              </dd>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-xl border border-pure-white/15 bg-primary-navy/75 p-4 flex items-start gap-3.5">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-terracotta/65 bg-deep-navy text-terracotta">
              <MapPin aria-hidden="true" className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-soft-blue/85">
                Location
              </dt>
              <dd className="mt-0.5 text-sm sm:text-[0.95rem] font-semibold text-pure-white">
                {ACADEMIC_IDENTITY.location}
              </dd>
            </div>
          </div>
        </dl>

        {/* Functional Actions (Terracotta CTA Accent + High-Contrast Outlines) */}
        <div className="space-y-2.5 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <ButtonLink
              href={`mailto:${ACADEMIC_IDENTITY.email}`}
              variant="terracotta"
              size="md"
              fullWidth
            >
              <Mail
                aria-hidden="true"
                className="h-4 w-4 text-soft-gold"
              />
              <span>Email Amina</span>
            </ButtonLink>

            <ButtonLink
              href={ACADEMIC_IDENTITY.phoneHref}
              variant="outlineOnDark"
              size="md"
              fullWidth
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-golden-yellow" />
              <span>Call Amina</span>
            </ButtonLink>
          </div>

          <Button
            type="button"
            variant="outlineOnDark"
            size="md"
            fullWidth
            onClick={handleCopyEmail}
          >
            {copied ? (
              <>
                <Check aria-hidden="true" className="h-4 w-4 text-golden-yellow" />
                <span>Email Copied</span>
              </>
            ) : (
              <>
                <Copy aria-hidden="true" className="h-4 w-4 text-terracotta" />
                <span>Copy Email Address</span>
              </>
            )}
          </Button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? `Copied ${ACADEMIC_IDENTITY.email} to clipboard.` : ""}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
