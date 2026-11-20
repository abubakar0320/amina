import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export interface PageLayoutProps {
  children: ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
  headerAction?: ReactNode;
  className?: string;
}

/**
 * Reusable inner-page layout shell using cool-white surface and navy typography.
 */
export function PageLayout({
  children,
  eyebrow,
  title,
  description,
  backHref = "/",
  backLabel = "Back to Home",
  headerAction,
  className,
}: PageLayoutProps) {
  return (
    <div className={cn("pb-16 sm:pb-24", className)}>
      <section className="border-b border-border-subtle bg-cool-white py-12 sm:py-16">
        <Container>
          {backHref && (
            <Link
              href={backHref}
              className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-secondary-text transition-colors hover:text-primary-navy"
            >
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 text-teal" />
              <span>{backLabel}</span>
            </Link>
          )}

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-3">
              {eyebrow && (
                <Badge variant="blue" dot>
                  {eyebrow}
                </Badge>
              )}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.625rem] font-semibold leading-[1.16] tracking-[-0.015em] text-deep-navy">
                {title}
              </h1>
              {description && (
                <p className="text-base sm:text-[1.0625rem] leading-[1.7] text-secondary-text">
                  {description}
                </p>
              )}
            </div>

            {headerAction && <div className="shrink-0">{headerAction}</div>}
          </div>
        </Container>
      </section>

      <Container className="pt-10 sm:pt-14">{children}</Container>
    </div>
  );
}
