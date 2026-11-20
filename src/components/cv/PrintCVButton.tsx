"use client";

import { Printer } from "lucide-react";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button";

export interface PrintCVButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function PrintCVButton({
  variant = "outline",
  size = "lg",
  className,
}: PrintCVButtonProps) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={() => window.print()}
      className={className}
    >
      <Printer aria-hidden="true" className="h-4 w-4 text-primary-navy" />
      <span>Print CV</span>
    </Button>
  );
}
