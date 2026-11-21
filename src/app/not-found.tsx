import Link from "next/link";
import { ArrowLeft, Compass, Download, Mail } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { LIVE_SITE_DIRECTORY } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export default function NotFound() {
  return (
    <section className="bg-cool-white py-16 sm:py-24">
      <Container size="narrow">
        <Card surface="white" accentTop accentTone="purple" className="overflow-hidden">
          <CardHeader className="space-y-4">
            <Badge variant="purple">404 · Page Not Found</Badge>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-deep-navy">
              The Requested Page Could Not Be Found
            </h1>

            <p className="text-[0.975rem] sm:text-base leading-[1.75] text-secondary-text">
              The URL you visited does not exist on{" "}
              <span className="font-medium text-deep-navy">
                {ACADEMIC_IDENTITY.fullName}
              </span>
              &apos;s academic website. Use the directory below to navigate to
              any available academic section.
            </p>
          </CardHeader>

          <CardBody className="space-y-6 pb-8">
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <ButtonLink href="/" variant="primary" size="md">
                <ArrowLeft aria-hidden="true" className="h-4 w-4 text-soft-blue" />
                <span>Return to Homepage</span>
              </ButtonLink>

              <ButtonLink
                href={ACADEMIC_IDENTITY.cvPath}
                download={ACADEMIC_IDENTITY.cvFileName}
                variant="secondary"
                size="md"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                <span>Download Academic CV (PDF)</span>
              </ButtonLink>

              <ButtonLink href="/contact" variant="terracotta" size="md">
                <Mail aria-hidden="true" className="h-4 w-4 text-soft-gold" />
                <span>Contact Amina</span>
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-soft-blue/50 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-deep-navy">
                <Compass aria-hidden="true" className="h-4 w-4 text-teal" />
                <span>Available Academic Sections</span>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {LIVE_SITE_DIRECTORY.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="flex items-center justify-between rounded-xl border border-border-subtle bg-pure-white px-3.5 py-2.5 text-sm transition-colors hover:border-primary-navy/45 hover:bg-soft-blue/40"
                  >
                    <span className="font-medium text-deep-navy">
                      {route.label}
                    </span>
                    <span className="text-xs text-secondary-text">
                      {route.href}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
}
