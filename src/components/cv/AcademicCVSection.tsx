import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface AcademicCVSectionProps {
  title: string;
  id?: string;
  children: ReactNode;
  className?: string;
}

export function AcademicCVSection({
  title,
  id,
  children,
  className,
}: AcademicCVSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={cn(
        "cv-print-section border-t border-border-subtle pt-7 pb-1 first:border-t-0 first:pt-0",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="h-4 w-[3px] rounded-full bg-teal"
        />
        <h2
          id={id ? `${id}-heading` : undefined}
          className="font-serif text-lg sm:text-xl font-semibold tracking-[-0.01em] text-deep-navy"
        >
          {title}
        </h2>
      </div>

      <div>{children}</div>
    </section>
  );
}
