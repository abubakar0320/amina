import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "navy"
  | "blue"
  | "teal"
  | "purple"
  | "gold"
  | "terracotta"
  | "cool"
  | "outline";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  dot?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  navy: "bg-primary-navy text-pure-white border-primary-navy",
  blue: "bg-soft-blue text-primary-navy border-primary-navy/25",
  teal: "bg-soft-teal text-deep-navy border-teal/35",
  purple: "bg-soft-purple text-deep-navy border-purple/35",
  gold: "bg-soft-gold text-deep-navy border-golden-yellow/75",
  terracotta: "bg-pure-white text-deep-navy border-terracotta/70",
  cool: "bg-cool-white text-main-text border-border-subtle",
  outline: "bg-pure-white text-secondary-text border-border-subtle",
};

const DOT_CLASSES: Record<BadgeVariant, string> = {
  navy: "bg-golden-yellow",
  blue: "bg-primary-navy",
  teal: "bg-teal",
  purple: "bg-purple",
  gold: "bg-terracotta",
  terracotta: "bg-terracotta",
  cool: "bg-primary-navy/70",
  outline: "bg-teal",
};

export function Badge({
  children,
  variant = "cool",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium leading-tight tracking-wide",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 rounded-full", DOT_CLASSES[variant])}
        />
      )}
      {children}
    </span>
  );
}
