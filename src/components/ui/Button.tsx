import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "deepNavy"
  | "secondary"
  | "teal"
  | "purple"
  | "gold"
  | "terracotta"
  | "outline"
  | "outlineOnDark"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-navy text-pure-white border border-primary-navy hover:bg-deep-navy hover:border-deep-navy shadow-xs",
  deepNavy:
    "bg-deep-navy text-pure-white border border-deep-navy hover:bg-primary-navy hover:border-primary-navy shadow-xs",
  secondary:
    "bg-soft-blue text-deep-navy border border-primary-navy/25 hover:bg-soft-blue/75 hover:border-primary-navy/50",
  teal:
    "bg-soft-teal text-deep-navy border border-teal/50 hover:bg-teal/15 hover:border-teal shadow-2xs",
  purple:
    "bg-soft-purple text-deep-navy border border-purple/45 hover:bg-purple/15 hover:border-purple shadow-2xs",
  gold:
    "bg-soft-gold text-deep-navy border border-golden-yellow/75 hover:bg-golden-yellow/25 hover:border-golden-yellow shadow-2xs",
  terracotta:
    "bg-pure-white text-deep-navy border-2 border-terracotta hover:bg-soft-gold hover:border-terracotta shadow-xs",
  outline:
    "bg-pure-white text-main-text border border-border-subtle hover:bg-cool-white hover:border-primary-navy/45",
  outlineOnDark:
    "bg-pure-white/10 text-pure-white border border-pure-white/35 hover:bg-pure-white/20 hover:border-pure-white/65",
  ghost:
    "bg-transparent text-main-text border border-transparent hover:bg-cool-white",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "min-h-10 h-10 px-4 text-sm gap-1.5 rounded-xl",
  md: "min-h-11 h-11 px-5 text-sm gap-2 rounded-xl",
  lg: "min-h-12 h-12 px-6 text-[0.9375rem] gap-2.5 rounded-xl",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: ButtonStyleOptions = {}): string {
  return cn(
    "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-200 select-none cursor-pointer",
    "[@media(hover:hover)]:hover:-translate-y-[1px] active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
    "disabled:pointer-events-none disabled:opacity-50",
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth && "w-full",
    className
  );
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleOptions {
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, fullWidth, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonStyleOptions {
  href: string;
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  fullWidth = false,
  external = false,
  className,
  children,
  download,
  target,
  rel,
  ...props
}: ButtonLinkProps) {
  const classes = buttonStyles({ variant, size, fullWidth, className });
  const isExternalOrFile =
    external ||
    Boolean(download) ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.endsWith(".pdf");

  if (isExternalOrFile) {
    const resolvedTarget =
      target ??
      (!download && (external || href.startsWith("http"))
        ? "_blank"
        : undefined);
    const resolvedRel =
      rel ??
      (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={resolvedTarget}
        rel={resolvedRel}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
