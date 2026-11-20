import { Suspense } from "react";
import Link from "next/link";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { CONTACT_NAV_ITEM, PRIMARY_NAVIGATION } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { StickyHeaderShell } from "@/components/layout/StickyHeaderShell";

function HeaderNavFallback() {
  return (
    <div className="flex flex-1 items-center justify-end lg:justify-between gap-4">
      <nav
        aria-label="Primary navigation"
        className="hidden lg:flex items-center gap-2"
      >
        {PRIMARY_NAVIGATION.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary-navy/85"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link
        href={CONTACT_NAV_ITEM.href}
        className={buttonStyles({ variant: "terracotta", size: "sm" })}
      >
        {CONTACT_NAV_ITEM.label}
      </Link>
    </div>
  );
}

export function SiteHeader() {
  return (
    <StickyHeaderShell>
      <Container className="flex h-[4.25rem] sm:h-[4.75rem] items-center justify-between gap-3 sm:gap-6">
        {/* Academic Brand Wordmark */}
        <Link
          href="/"
          className="group flex flex-col shrink-0 rounded-lg py-1 pr-1 sm:pr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <span className="font-serif text-[0.875rem] min-[375px]:text-[0.9375rem] sm:text-[1.125rem] font-semibold tracking-[0.11em] sm:tracking-[0.14em] text-deep-navy transition-colors group-hover:text-primary-navy">
            {ACADEMIC_IDENTITY.wordmark}
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[0.6875rem] sm:text-xs font-medium tracking-wide text-secondary-text">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-teal transition-transform duration-200 group-hover:scale-125"
            />
            <span>{ACADEMIC_IDENTITY.descriptor}</span>
          </span>
        </Link>

        {/* Suspense boundary ensures full prerendering compatibility with Cache Components */}
        <Suspense fallback={<HeaderNavFallback />}>
          <HeaderNav />
        </Suspense>
      </Container>
    </StickyHeaderShell>
  );
}
