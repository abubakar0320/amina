"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, Mail, RotateCcw } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";

export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application route error boundary triggered:", error.digest ?? "untagged");
  }, [error]);

  return (
    <section className="bg-cool-white py-16 sm:py-24">
      <Container size="narrow">
        <Card surface="white" accentTop accentTone="terracotta" className="overflow-hidden">
          <CardHeader className="space-y-4">
            <Badge variant="terracotta" dot>
              Unexpected Display Error
            </Badge>

            <div className="flex items-start gap-3.5">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-terracotta/40 bg-soft-gold text-terracotta">
                <AlertTriangle aria-hidden="true" className="h-5 w-5" />
              </span>
              <div className="space-y-2">
                <h1 className="font-serif text-2xl sm:text-3xl font-semibold leading-tight text-deep-navy">
                  Unable to Load This Section
                </h1>
                <p className="text-[0.975rem] sm:text-base leading-[1.75] text-secondary-text">
                  A temporary rendering error interrupted this page. You can retry
                  loading the section cleanly or return to the academic homepage.
                </p>
              </div>
            </div>
          </CardHeader>

          <CardBody className="flex flex-col sm:flex-row flex-wrap gap-3 pb-8">
            <Button type="button" variant="primary" size="md" onClick={reset}>
              <RotateCcw aria-hidden="true" className="h-4 w-4 text-soft-blue" />
              <span>Try Again</span>
            </Button>

            <ButtonLink href="/" variant="secondary" size="md">
              <Home aria-hidden="true" className="h-4 w-4" />
              <span>Return to Homepage</span>
            </ButtonLink>

            <ButtonLink href="/contact" variant="terracotta" size="md">
              <Mail aria-hidden="true" className="h-4 w-4 text-terracotta" />
              <span>Contact Amina</span>
            </ButtonLink>
          </CardBody>
        </Card>
      </Container>
    </section>
  );
}
