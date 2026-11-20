import { INQUIRY_TYPE_OPTIONS, type InquiryTypeOption } from "@/data/academic-profile";

export const CONTACT_FIELD_LIMITS = {
  fullNameMin: 2,
  fullNameMax: 120,
  emailMax: 180,
  organizationMax: 180,
  subjectMin: 3,
  subjectMax: 200,
  messageMin: 15,
  messageMax: 3000,
} as const;

export interface ContactSubmissionInput {
  fullName: string;
  email: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface SanitizedContactSubmission {
  fullName: string;
  email: string;
  organization: string;
  inquiryType: InquiryTypeOption;
  subject: string;
  message: string;
  consent: true;
}

export type ContactValidationErrors = Partial<
  Record<
    "fullName" | "email" | "organization" | "inquiryType" | "subject" | "message" | "consent",
    string
  >
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function sanitizeSingleLine(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\r\n\t]+/g, " ")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim();
}

export function sanitizeMultiline(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function validateContactPayload(raw: ContactSubmissionInput):
  | { valid: true; data: SanitizedContactSubmission }
  | { valid: false; errors: ContactValidationErrors } {
  const fullName = sanitizeSingleLine(raw.fullName);
  const email = sanitizeSingleLine(raw.email).toLowerCase();
  const organization = sanitizeSingleLine(raw.organization);
  const inquiryType = sanitizeSingleLine(raw.inquiryType);
  const subject = sanitizeSingleLine(raw.subject);
  const message = sanitizeMultiline(raw.message);
  const consent = raw.consent === true;

  const errors: ContactValidationErrors = {};

  if (!fullName) {
    errors.fullName = "Please enter your full name.";
  } else if (fullName.length < CONTACT_FIELD_LIMITS.fullNameMin) {
    errors.fullName = `Full name must be at least ${CONTACT_FIELD_LIMITS.fullNameMin} characters.`;
  } else if (fullName.length > CONTACT_FIELD_LIMITS.fullNameMax) {
    errors.fullName = `Full name must be ${CONTACT_FIELD_LIMITS.fullNameMax} characters or fewer.`;
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (
    email.length > CONTACT_FIELD_LIMITS.emailMax ||
    !EMAIL_PATTERN.test(email)
  ) {
    errors.email = "Please enter a valid international email address.";
  }

  if (organization.length > CONTACT_FIELD_LIMITS.organizationMax) {
    errors.organization = `Organization or university must be ${CONTACT_FIELD_LIMITS.organizationMax} characters or fewer.`;
  }

  const allowedTypes: readonly string[] = INQUIRY_TYPE_OPTIONS;
  if (!inquiryType || !allowedTypes.includes(inquiryType)) {
    errors.inquiryType = "Please select an inquiry type.";
  }

  if (!subject) {
    errors.subject = "Please enter a subject for your inquiry.";
  } else if (subject.length < CONTACT_FIELD_LIMITS.subjectMin) {
    errors.subject = `Subject must be at least ${CONTACT_FIELD_LIMITS.subjectMin} characters.`;
  } else if (subject.length > CONTACT_FIELD_LIMITS.subjectMax) {
    errors.subject = `Subject must be ${CONTACT_FIELD_LIMITS.subjectMax} characters or fewer.`;
  }

  if (!message) {
    errors.message = "Please enter your message.";
  } else if (message.length < CONTACT_FIELD_LIMITS.messageMin) {
    errors.message = `Message must be at least ${CONTACT_FIELD_LIMITS.messageMin} characters.`;
  } else if (message.length > CONTACT_FIELD_LIMITS.messageMax) {
    errors.message = `Message must be ${CONTACT_FIELD_LIMITS.messageMax} characters or fewer.`;
  }

  if (!consent) {
    errors.consent =
      "Please confirm consent so your details may be used to reply.";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      fullName,
      email,
      organization,
      inquiryType: inquiryType as InquiryTypeOption,
      subject,
      message,
      consent: true,
    },
  };
}
