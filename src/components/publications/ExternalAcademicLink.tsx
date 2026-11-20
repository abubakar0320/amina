import { ArrowUpRight } from "lucide-react";
import { ButtonLink, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";

export interface ExternalAcademicLinkProps {
  href: string;
  label: string;
  ariaLabel?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

/**
 * Accessible external link component for verified scholarly articles and academic profiles.
 */
export function ExternalAcademicLink({
  href,
  label,
  ariaLabel,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: ExternalAcademicLinkProps) {
  return (
    <ButtonLink
      href={href}
      external
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      aria-label={ariaLabel ?? `${label} (opens in a new tab)`}
      className={`group ${className ?? ""}`}
    >
      <span>{label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </ButtonLink>
  );
}
