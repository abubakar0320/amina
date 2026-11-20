import { AlertCircle, Mail } from "lucide-react";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import { ButtonLink } from "@/components/ui/Button";

export interface FormErrorStateProps {
  message: string;
  code?: string;
}

export function FormErrorState({ message, code }: FormErrorStateProps) {
  const isUnconfigured = code === "EMAIL_NOT_CONFIGURED";

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="rounded-2xl border border-terracotta bg-soft-gold/75 p-5 space-y-3"
    >
      <div className="flex items-start gap-3">
        <AlertCircle
          aria-hidden="true"
          className="mt-0.5 h-5 w-5 shrink-0 text-terracotta"
        />
        <div className="space-y-1">
          <p className="text-sm font-semibold text-deep-navy">
            Your message could not be submitted. Please try again or contact
            Amina directly by email.
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-main-text/90">
            {message}
          </p>
          {isUnconfigured && (
            <p className="text-xs text-primary-navy">
              Status: Email delivery integration is currently pending server
              configuration. You may reach Amina directly using the email button
              below.
            </p>
          )}
        </div>
      </div>

      <div>
        <ButtonLink
          href={`mailto:${ACADEMIC_IDENTITY.email}`}
          variant="terracotta"
          size="sm"
        >
          <Mail aria-hidden="true" className="h-3.5 w-3.5 text-terracotta" />
          <span>Email {ACADEMIC_IDENTITY.email}</span>
        </ButtonLink>
      </div>
    </div>
  );
}
