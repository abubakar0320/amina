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
  teal: "bg-teal text-pure-white border-teal",
  purple: "bg-purple text-pure-white border-purple",
  gold: "bg-golden-yellow text-deep-navy border-[#B38114] font-semibold",
  terracotta: "bg-terracotta text-pure-white border-terracotta",
  cool: "bg-cool-white text-main-text border-border-subtle",
  outline: "bg-pure-white text-secondary-text border-border-subtle",
};

const DOT_CLASSES: Record<BadgeVariant, string> = {
  navy: "bg-golden-yellow",
  blue: "bg-primary-navy",
  teal: "bg-soft-teal",
  purple: "bg-soft-purple",
  gold: "bg-deep-navy",
  terracotta: "bg-soft-gold",
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
