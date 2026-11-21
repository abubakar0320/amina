import { CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface FormSuccessStateProps {
  submittedAt: string;
  inquiryType: string;
  onReset: () => void;
}

export function FormSuccessState({
  submittedAt,
  inquiryType,
  onReset,
}: FormSuccessStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-2xl border border-teal/40 bg-soft-teal p-6 sm:p-8 space-y-5"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal/35 bg-pure-white text-teal">
          <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
        </span>

        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-deep-navy">
            Inquiry Submitted
          </h3>
          <p className="text-sm sm:text-base leading-relaxed text-main-text/90">
            Thank you for reaching out. Your inquiry has been submitted
            successfully.
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-teal/25 bg-pure-white px-4 py-3 text-xs text-secondary-text flex flex-wrap items-center justify-between gap-2">
        <span>Category: {inquiryType}</span>
        <span>Recorded (UTC): {submittedAt}</span>
      </div>

      <div>
        <Button type="button" variant="teal" size="md" onClick={onReset}>
          <RotateCcw aria-hidden="true" className="h-4 w-4 text-soft-teal" />
          <span>Send Another Inquiry</span>
        </Button>
      </div>
    </div>
  );
}
