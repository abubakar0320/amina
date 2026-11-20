import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { buildPageMetadata } from "@/lib/seo";
import { buildPageSchemaGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactInformationCard } from "@/components/contact/ContactInformationCard";
import { AcademicInquiryForm } from "@/components/contact/AcademicInquiryForm";

const CONTACT_TITLE = "Contact Amina Mumtaz | Academic Collaboration";
const CONTACT_DESCRIPTION =
  "Get in touch with Amina Mumtaz for academic discussions, research exchange and professional communication.";

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  path: "/contact",
  keywords: [
    "Academic Collaboration",
    "Doctoral Inquiry Applied Linguistics",
    "Corpus Linguistics Research Exchange",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildPageSchemaGraph({
          path: "/contact",
          name: CONTACT_TITLE,
          description: CONTACT_DESCRIPTION,
          pageType: "ContactPage",
          breadcrumbs: [
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ],
        })}
      />
      {/* Contact Hero (Deep Navy with White Typography & Terracotta Accent) */}
      <section
        aria-labelledby="contact-hero-heading"
        className="border-b border-primary-navy bg-deep-navy text-pure-white"
      >
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 animate-editorial-up">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-soft-blue transition-colors hover:text-pure-white"
            >
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 text-terracotta" />
              <span>Back to Home</span>
            </Link>

            <p className="text-xs font-medium text-soft-blue/85">
              {ACADEMIC_IDENTITY.fullName} &middot; Professional Contact
            </p>
          </div>

          <div className="max-w-3xl space-y-5 animate-editorial-up">
            <Badge
              variant="terracotta"
              dot
              className="bg-pure-white/10 border-terracotta text-pure-white"
            >
              PROFESSIONAL CONTACT
            </Badge>

            <h1
              id="contact-hero-heading"
              className="font-serif text-[2.125rem] sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-[-0.02em] text-pure-white"
            >
              Let&apos;s Connect Academically
            </h1>

            <p className="text-[0.975rem] sm:text-[1.0625rem] leading-[1.78] text-soft-blue/90">
              For academic discussions, research exchange, and professional
              communication, you are welcome to get in touch.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Grid: Mobile places Contact Details first, Form second */}
      <section
        aria-label="Contact details and academic inquiry form"
        className="bg-cool-white py-12 sm:py-16 lg:py-20"
      >
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <ContactInformationCard />
            </div>

            <div className="lg:col-span-7">
              <AcademicInquiryForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
