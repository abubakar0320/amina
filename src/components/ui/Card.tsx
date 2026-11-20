import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardSurface =
  | "white"
  | "cool"
  | "blue"
  | "teal"
  | "purple"
  | "gold"
  | "navy";

export type CardAccentTone =
  | "navy"
  | "teal"
  | "purple"
  | "gold"
  | "terracotta";

export interface CardProps {
  children: ReactNode;
  surface?: CardSurface;
  interactive?: boolean;
  accentTop?: boolean;
  accentTone?: CardAccentTone;
  className?: string;
  as?: "div" | "article" | "section" | "aside";
}

const SURFACE_CLASSES: Record<CardSurface, string> = {
  white: "bg-pure-white border-border-subtle text-main-text",
  cool: "bg-cool-white border-border-subtle text-main-text",
  blue: "bg-soft-blue border-primary-navy/20 text-main-text",
  teal: "bg-soft-teal border-teal/30 text-main-text",
  purple: "bg-soft-purple border-purple/25 text-main-text",
  gold: "bg-soft-gold border-golden-yellow/60 text-main-text",
  navy: "bg-deep-navy border-primary-navy text-pure-white",
};

const ACCENT_TOP_CLASSES: Record<CardAccentTone, string> = {
  navy: "border-t-[3px] border-t-primary-navy",
  teal: "border-t-[3px] border-t-teal",
  purple: "border-t-[3px] border-t-purple",
  gold: "border-t-[3px] border-t-golden-yellow",
  terracotta: "border-t-[3px] border-t-terracotta",
};

const HOVER_BORDER_CLASSES: Record<CardAccentTone, string> = {
  navy: "hover:border-primary-navy/55",
  teal: "hover:border-teal/65",
  purple: "hover:border-purple/55",
  gold: "hover:border-golden-yellow",
  terracotta: "hover:border-terracotta/75",
};

export function Card({
  children,
  surface = "white",
  interactive = false,
  accentTop = false,
  accentTone = "navy",
  className,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "group rounded-2xl border shadow-[var(--shadow-card)]",
        SURFACE_CLASSES[surface],
        accentTop && ACCENT_TOP_CLASSES[accentTone],
        interactive &&
          `transition-all duration-250 [@media(hover:hover)]:hover:-translate-y-0.5 ${HOVER_BORDER_CLASSES[accentTone]} hover:shadow-[var(--shadow-card-hover)] motion-reduce:transform-none`,
        className
      )}
    >
      {children}
    </Component>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("px-6 pt-6 pb-3 sm:px-7 sm:pt-7", className)}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("px-6 py-3 sm:px-7", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-6 pt-3 pb-6 sm:px-7 sm:pb-7 border-t border-border-subtle mt-2",
        className
      )}
    >
      {children}
    </div>
  );
}
