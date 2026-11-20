import { NextResponse, type NextRequest } from "next/server";
import { ACADEMIC_IDENTITY } from "@/data/academic-profile";
import {
  escapeHtml,
  sanitizeSingleLine,
  validateContactPayload,
  type ContactSubmissionInput,
} from "@/lib/contact-validation";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_REQUEST_BYTES = 16 * 1024;
const NO_STORE_HEADERS = { "Cache-Control": "no-store" } as const;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIpKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return (
    request.headers.get("x-real-ip") ??
    request.headers.get("cf-connecting-ip") ??
    "local"
  );
}

function checkRateLimit(clientKey: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();

  if (rateLimitStore.size > 500) {
    for (const [key, entry] of rateLimitStore.entries()) {
      if (entry.resetAt <= now) {
        rateLimitStore.delete(key);
      }
    }
  }

  const current = rateLimitStore.get(clientKey);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((current.resetAt - now) / 1000)
    );
    return { allowed: false, retryAfterSeconds };
  }

  current.count += 1;
  return { allowed: true, retryAfterSeconds: 0 };
}

export async function POST(request: NextRequest) {
  // 1. Sliding-window rate limit check
  const clientIp = getClientIpKey(request);
  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.allowed) {
    return NextResponse.json(
      {
        ok: false,
        code: "RATE_LIMITED",
        error:
          "Too many inquiry attempts from this connection. Please wait a few minutes or email directly.",
      },
      {
        status: 429,
        headers: {
          ...NO_STORE_HEADERS,
          "Retry-After": String(rateCheck.retryAfterSeconds),
        },
      }
    );
  }

  // 2. Enforce JSON content type and bounded payload size
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      {
        ok: false,
        code: "UNSUPPORTED_MEDIA_TYPE",
        error: "Requests must use application/json.",
      },
      { status: 415, headers: NO_STORE_HEADERS }
    );
  }

  const contentLengthHeader = request.headers.get("content-length");
  if (contentLengthHeader && Number(contentLengthHeader) > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      {
        ok: false,
        code: "PAYLOAD_TOO_LARGE",
        error: "Submission payload exceeds maximum allowed size.",
      },
      { status: 413, headers: NO_STORE_HEADERS }
    );
  }

  // 3. Parse request body safely
  let body: ContactSubmissionInput;
  try {
    const rawText = await request.text();
    if (Buffer.byteLength(rawText, "utf8") > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        {
          ok: false,
          code: "PAYLOAD_TOO_LARGE",
          error: "Submission payload exceeds maximum allowed size.",
        },
        { status: 413, headers: NO_STORE_HEADERS }
      );
    }

    const parsed = JSON.parse(rawText) as Partial<ContactSubmissionInput>;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json(
        { ok: false, code: "INVALID_BODY", error: "Invalid request payload." },
        { status: 400, headers: NO_STORE_HEADERS }
      );
    }
    body = {
      fullName: String(parsed.fullName ?? ""),
      email: String(parsed.email ?? ""),
      organization: String(parsed.organization ?? ""),
      inquiryType: String(parsed.inquiryType ?? ""),
      subject: String(parsed.subject ?? ""),
      message: String(parsed.message ?? ""),
      consent: parsed.consent === true,
      honeypot: typeof parsed.honeypot === "string" ? parsed.honeypot : "",
    };
  } catch {
    return NextResponse.json(
      { ok: false, code: "INVALID_JSON", error: "Malformed JSON request." },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  // 4. Honeypot anti-spam check
  if (sanitizeSingleLine(body.honeypot).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        code: "SPAM_REJECTED",
        error: "Submission could not be accepted.",
      },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  // 5. Server-side validation & sanitization
  const validation = validateContactPayload(body);
  if (!validation.valid) {
    return NextResponse.json(
      {
        ok: false,
        code: "VALIDATION_ERROR",
        error: "Please correct the highlighted fields and try again.",
        fieldErrors: validation.errors,
      },
      { status: 400, headers: NO_STORE_HEADERS }
    );
  }

  // 6. Verify email service environment configuration (never fake delivery!)
  const resendApiKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || ACADEMIC_IDENTITY.email;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        ok: false,
        code: "EMAIL_NOT_CONFIGURED",
        error: `Online inquiry delivery is not yet configured on this server. Please email ${ACADEMIC_IDENTITY.email} directly.`,
      },
      { status: 503, headers: NO_STORE_HEADERS }
    );
  }

  const submittedAt = new Date().toISOString();
  const { fullName, email, organization, inquiryType, subject, message } =
    validation.data;

  const textBody = [
    `Academic Inquiry via ${ACADEMIC_IDENTITY.fullName} Website`,
    `Submitted (UTC): ${submittedAt}`,
    `Inquiry Type: ${inquiryType}`,
    `Full Name: ${fullName}`,
    `Email: ${email}`,
    `Organization / University: ${organization || "Not provided"}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family: Inter, Arial, sans-serif; color: #273449; line-height: 1.6; max-width: 640px;">
      <h2 style="margin-bottom: 12px; color: #192B50;">New Academic Inquiry</h2>
      <p style="margin: 0 0 16px; color: #667085; font-size: 13px;">
        Submitted UTC: ${escapeHtml(submittedAt)}
      </p>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">
        <tr><td style="padding: 6px 0; font-weight: 600; color: #253B70;">Inquiry Type:</td><td>${escapeHtml(inquiryType)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600; color: #253B70;">Name:</td><td>${escapeHtml(fullName)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600; color: #253B70;">Email:</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600; color: #253B70;">Organization:</td><td>${escapeHtml(organization || "Not provided")}</td></tr>
        <tr><td style="padding: 6px 0; font-weight: 600; color: #253B70;">Subject:</td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <div style="padding: 14px; background: #EAF0FA; border: 1px solid #E3E8F0; border-radius: 8px; white-space: pre-wrap;">
        ${escapeHtml(message)}
      </div>
    </div>
  `.trim();

  // 6. Dispatch via Resend REST API
  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `[${inquiryType}] ${subject}`,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      console.error(`Contact email provider returned status ${resendResponse.status}`);
      return NextResponse.json(
        {
          ok: false,
          code: "PROVIDER_ERROR",
          error:
            "Your message could not be submitted at this time. Please try again or contact Amina directly by email.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        submittedAt,
      },
      { status: 200 }
    );
  } catch {
    console.error("Contact email provider request failed.");
    return NextResponse.json(
      {
        ok: false,
        code: "NETWORK_ERROR",
        error:
          "Your message could not be submitted. Please try again or contact Amina directly by email.",
      },
      { status: 502 }
    );
  }
}
