import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type HeadingAccent = "navy" | "teal" | "purple" | "gold" | "terracotta";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  accent?: HeadingAccent;
  action?: ReactNode;
  id?: string;
  className?: string;
}

const ACCENT_LINE_CLASSES: Record<HeadingAccent, string> = {
  navy: "bg-primary-navy",
  teal: "bg-teal",
  purple: "bg-purple",
  gold: "bg-golden-yellow",
  terracotta: "bg-terracotta",
};

const EYEBROW_TEXT_CLASSES: Record<HeadingAccent, string> = {
  navy: "text-primary-navy",
  teal: "text-deep-navy",
  purple: "text-deep-navy",
  gold: "text-deep-navy",
  terracotta: "text-deep-navy",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  accent = "navy",
  action,
  id,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        !isCentered &&
          Boolean(action) &&
          "md:flex-row md:items-end md:justify-between",
        isCentered && "items-center text-center mx-auto max-w-2xl",
        className
      )}
    >
      <div className={cn("space-y-3", !isCentered && "max-w-2xl")}>
        {eyebrow && (
          <div
            className={cn(
              "inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em]",
              EYEBROW_TEXT_CLASSES[accent],
              isCentered && "justify-center"
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "h-[2px] w-6 rounded-full",
                ACCENT_LINE_CLASSES[accent]
              )}
            />
            <span>{eyebrow}</span>
          </div>
        )}

        <HeadingTag
          id={id}
          className={cn(
            "font-serif font-semibold tracking-[-0.015em] text-deep-navy",
            HeadingTag === "h1"
              ? "text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15]"
              : "text-2xl sm:text-[1.875rem] lg:text-[2.125rem] leading-[1.2]"
          )}
        >
          {title}
        </HeadingTag>

        {description && (
          <p className="text-[0.975rem] sm:text-base leading-[1.7] text-secondary-text">
            {description}
          </p>
        )}
      </div>

      {action && !isCentered && <div className="shrink-0">{action}</div>}
    </div>
  );
}
