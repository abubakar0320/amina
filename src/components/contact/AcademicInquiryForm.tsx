"use client";

import { useRef, useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { INQUIRY_TYPE_OPTIONS } from "@/data/academic-profile";
import {
  CONTACT_FIELD_LIMITS,
  validateContactPayload,
  type ContactValidationErrors,
} from "@/lib/contact-validation";
import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FormSuccessState } from "@/components/contact/FormSuccessState";
import { FormErrorState } from "@/components/contact/FormErrorState";

interface FormState {
  fullName: string;
  email: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  email: "",
  organization: "",
  inquiryType: "",
  subject: "",
  message: "",
  consent: false,
  honeypot: "",
};

const INPUT_BASE_CLASSES =
  "w-full rounded-xl border bg-cool-white/55 px-4 py-3 text-sm text-main-text placeholder:text-secondary-text/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export function AcademicInquiryForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [fieldErrors, setFieldErrors] = useState<ContactValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<{
    message: string;
    code?: string;
  } | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    submittedAt: string;
    inquiryType: string;
  } | null>(null);
  const serverErrorRef = useRef<HTMLDivElement>(null);

  const scrollServerErrorIntoView = () => {
    requestAnimationFrame(() => {
      serverErrorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  const clearFieldError = (field: keyof ContactValidationErrors) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setSubmissionError(null);

    const validation = validateContactPayload(form);
    if (!validation.valid) {
      setFieldErrors(validation.errors);
      const firstInvalidField = (
        [
          "fullName",
          "email",
          "organization",
          "inquiryType",
          "subject",
          "message",
          "consent",
        ] as const
      ).find((key) => Boolean(validation.errors[key]));
      if (firstInvalidField) {
        requestAnimationFrame(() => {
          const el = document.getElementById(`contact-${firstInvalidField}`);
          el?.focus();
          el?.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      }
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        submittedAt?: string;
        error?: string;
        code?: string;
        fieldErrors?: ContactValidationErrors;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          setFieldErrors(payload.fieldErrors);
        }
        setSubmissionError({
          message:
            payload?.error ??
            "An unexpected error occurred while submitting your inquiry.",
          code: payload?.code,
        });
        scrollServerErrorIntoView();
        return;
      }

      setSuccessInfo({
        submittedAt: payload.submittedAt ?? new Date().toISOString(),
        inquiryType: validation.data.inquiryType,
      });
      setForm(INITIAL_FORM_STATE);
    } catch {
      setSubmissionError({
        message:
          "Unable to reach the inquiry service. Please verify your connection or contact Amina directly by email.",
      });
      scrollServerErrorIntoView();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card surface="white" accentTop accentTone="terracotta" className="overflow-hidden">
      <CardHeader className="border-b border-border-subtle pb-5">
        <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary-navy">
          Academic Inquiry Form
        </p>
        <h2 className="mt-1 font-serif text-xl sm:text-2xl font-semibold text-deep-navy">
          Send a Professional Message
        </h2>
        <p className="mt-1 text-sm text-secondary-text">
          All fields marked with <span className="text-deep-navy font-semibold">*</span> are required.
        </p>
      </CardHeader>

      <CardBody className="py-6 sm:py-8">
        {successInfo ? (
          <FormSuccessState
            submittedAt={successInfo.submittedAt}
            inquiryType={successInfo.inquiryType}
            onReset={() => setSuccessInfo(null)}
          />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {submissionError && (
              <div ref={serverErrorRef} tabIndex={-1} className="outline-none">
                <FormErrorState
                  message={submissionError.message}
                  code={submissionError.code}
                />
              </div>
            )}

            {/* Honeypot field for lightweight automated spam detection */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Website</label>
              <input
                id="contact-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, honeypot: e.target.value }))
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-fullName"
                  className="block text-sm font-medium text-deep-navy"
                >
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-fullName"
                  name="fullName"
                  type="text"
                  required
                  maxLength={CONTACT_FIELD_LIMITS.fullNameMax}
                  autoComplete="name"
                  placeholder="Dr. / Prof. / Ms. Full Name"
                  value={form.fullName}
                  onChange={(e) => {
                    clearFieldError("fullName");
                    setForm((prev) => ({ ...prev, fullName: e.target.value }));
                  }}
                  aria-invalid={Boolean(fieldErrors.fullName)}
                  aria-describedby={
                    fieldErrors.fullName ? "error-fullName" : undefined
                  }
                  className={cn(
                    INPUT_BASE_CLASSES,
                    fieldErrors.fullName
                      ? "border-[#B91C1C]"
                      : "border-border-subtle focus:border-teal"
                  )}
                />
                {fieldErrors.fullName && (
                  <p
                    id="error-fullName"
                    role="alert"
                    className="text-xs font-medium text-[#991B1B]"
                  >
                    {fieldErrors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-deep-navy"
                >
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={CONTACT_FIELD_LIMITS.emailMax}
                  autoComplete="email"
                  placeholder="name@university.edu"
                  value={form.email}
                  onChange={(e) => {
                    clearFieldError("email");
                    setForm((prev) => ({ ...prev, email: e.target.value }));
                  }}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby={
                    fieldErrors.email ? "error-email" : undefined
                  }
                  className={cn(
                    INPUT_BASE_CLASSES,
                    fieldErrors.email
                      ? "border-[#B91C1C]"
                      : "border-border-subtle focus:border-teal"
                  )}
                />
                {fieldErrors.email && (
                  <p
                    id="error-email"
                    role="alert"
                    className="text-xs font-medium text-[#991B1B]"
                  >
                    {fieldErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Organization / University */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-organization"
                  className="block text-sm font-medium text-deep-navy"
                >
                  Organization / University{" "}
                  <span className="text-xs font-normal text-secondary-text">
                    (Optional)
                  </span>
                </label>
                <input
                  id="contact-organization"
                  name="organization"
                  type="text"
                  maxLength={CONTACT_FIELD_LIMITS.organizationMax}
                  autoComplete="organization"
                  placeholder="Department or Institution"
                  value={form.organization}
                  onChange={(e) => {
                    clearFieldError("organization");
                    setForm((prev) => ({
                      ...prev,
                      organization: e.target.value,
                    }));
                  }}
                  aria-invalid={Boolean(fieldErrors.organization)}
                  aria-describedby={
                    fieldErrors.organization ? "error-organization" : undefined
                  }
                  className={cn(
                    INPUT_BASE_CLASSES,
                    fieldErrors.organization
                      ? "border-[#B91C1C]"
                      : "border-border-subtle focus:border-teal"
                  )}
                />
                {fieldErrors.organization && (
                  <p
                    id="error-organization"
                    role="alert"
                    className="text-xs font-medium text-[#991B1B]"
                  >
                    {fieldErrors.organization}
                  </p>
                )}
              </div>

              {/* Inquiry Type */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-inquiryType"
                  className="block text-sm font-medium text-deep-navy"
                >
                  Inquiry Type <span aria-hidden="true">*</span>
                </label>
                <select
                  id="contact-inquiryType"
                  name="inquiryType"
                  required
                  value={form.inquiryType}
                  onChange={(e) => {
                    clearFieldError("inquiryType");
                    setForm((prev) => ({
                      ...prev,
                      inquiryType: e.target.value,
                    }));
                  }}
                  aria-invalid={Boolean(fieldErrors.inquiryType)}
                  aria-describedby={
                    fieldErrors.inquiryType ? "error-inquiryType" : undefined
                  }
                  className={cn(
                    INPUT_BASE_CLASSES,
                    fieldErrors.inquiryType
                      ? "border-[#B91C1C]"
                      : "border-border-subtle focus:border-teal"
                  )}
                >
                  <option value="">Select an inquiry category</option>
                  {INQUIRY_TYPE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {fieldErrors.inquiryType && (
                  <p
                    id="error-inquiryType"
                    role="alert"
                    className="text-xs font-medium text-[#991B1B]"
                  >
                    {fieldErrors.inquiryType}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-deep-navy"
              >
                Subject <span aria-hidden="true">*</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                maxLength={CONTACT_FIELD_LIMITS.subjectMax}
                placeholder="Brief subject of your academic inquiry"
                value={form.subject}
                onChange={(e) => {
                  clearFieldError("subject");
                  setForm((prev) => ({ ...prev, subject: e.target.value }));
                }}
                aria-invalid={Boolean(fieldErrors.subject)}
                aria-describedby={
                  fieldErrors.subject ? "error-subject" : undefined
                }
                className={cn(
                  INPUT_BASE_CLASSES,
                  fieldErrors.subject
                    ? "border-[#B91C1C]"
                    : "border-border-subtle focus:border-teal"
                )}
              />
              {fieldErrors.subject && (
                <p
                  id="error-subject"
                  role="alert"
                  className="text-xs font-medium text-[#991B1B]"
                >
                  {fieldErrors.subject}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-deep-navy"
                >
                  Message <span aria-hidden="true">*</span>
                </label>
                <span className="text-xs text-secondary-text">
                  {form.message.length} / {CONTACT_FIELD_LIMITS.messageMax}
                </span>
              </div>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={CONTACT_FIELD_LIMITS.messageMax}
                placeholder="Share details regarding research discussion, doctoral supervision, or academic communication..."
                value={form.message}
                onChange={(e) => {
                  clearFieldError("message");
                  setForm((prev) => ({ ...prev, message: e.target.value }));
                }}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={
                  fieldErrors.message ? "error-message" : undefined
                }
                className={cn(
                  INPUT_BASE_CLASSES,
                  "min-h-[8.5rem] resize-y",
                  fieldErrors.message
                    ? "border-[#B91C1C]"
                    : "border-border-subtle focus:border-teal"
                )}
              />
              {fieldErrors.message && (
                <p
                  id="error-message"
                  role="alert"
                  className="text-xs font-medium text-[#991B1B]"
                >
                  {fieldErrors.message}
                </p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="space-y-1.5">
              <label
                htmlFor="contact-consent"
                className="flex items-start gap-3 rounded-xl border border-border-subtle bg-cool-white p-3.5 cursor-pointer"
              >
                <input
                  id="contact-consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => {
                    clearFieldError("consent");
                    setForm((prev) => ({ ...prev, consent: e.target.checked }));
                  }}
                  aria-invalid={Boolean(fieldErrors.consent)}
                  aria-describedby={
                    fieldErrors.consent ? "error-consent" : undefined
                  }
                  className="mt-0.5 h-4 w-4 rounded border-border-subtle accent-primary-navy focus-visible:outline-2 focus-visible:outline-teal"
                />
                <span className="text-xs sm:text-sm leading-relaxed text-deep-navy">
                  I agree that my information may be used to respond to this
                  inquiry. <span aria-hidden="true">*</span>
                </span>
              </label>

              {fieldErrors.consent && (
                <p
                  id="error-consent"
                  role="alert"
                  className="text-xs font-medium text-[#991B1B]"
                >
                  {fieldErrors.consent}
                </p>
              )}

              <p className="text-xs leading-relaxed text-secondary-text">
                Privacy notice: Submitted details are transmitted solely to reply
                to your academic inquiry by email. This site does not store form
                messages in a database or run third-party tracking scripts.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="deepNavy"
                size="lg"
                fullWidth
                disabled={isSubmitting}
                className="border-b-[3px] border-b-terracotta sm:w-auto sm:min-w-[14rem]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      aria-hidden="true"
                      className="h-4 w-4 animate-spin text-golden-yellow"
                    />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send aria-hidden="true" className="h-4 w-4 text-terracotta" />
                    <span>Submit Academic Inquiry</span>
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </CardBody>
    </Card>
  );
}
