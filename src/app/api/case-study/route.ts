import { Resend } from "resend";
import { projects } from "@/components/Projects/projects-data";

export const runtime = "nodejs";

// Same mail setup as /api/contact: case study downloads land in the enquiries inbox as leads.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info@excelelectrics.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Excel Electrics <onboarding@resend.dev>";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const PROJECT_NAMES = new Set(projects.filter((project) => project.pdf).map((project) => project.name));

async function verifyTurnstile(token: string, remoteip: string | null): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true;
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret: TURNSTILE_SECRET, response: token });
    if (remoteip) body.append("remoteip", remoteip);
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const data = (await response.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[case-study] Turnstile verification error", err);
    return false;
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: "Email service is not configured." }, { status: 500 });
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (String(formData.get("company") ?? "").trim()) {
    return Response.json({ ok: true });
  }

  const remoteip = request.headers.get("CF-Connecting-IP") ?? request.headers.get("x-forwarded-for");
  const humanVerified = await verifyTurnstile(String(formData.get("turnstileToken") ?? ""), remoteip);
  if (!humanVerified) {
    return Response.json({ ok: false, error: "Verification failed. Please refresh and try again." }, { status: 400 });
  }

  const name = String(formData.get("name") ?? "").trim().slice(0, 120);
  const email = String(formData.get("email") ?? "").trim().slice(0, 200);
  const phone = String(formData.get("phone") ?? "").trim().slice(0, 40);
  const project = String(formData.get("project") ?? "").trim();

  if (!name || !email) {
    return Response.json({ ok: false, error: "Please enter your name and email." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return Response.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }
  if (!PROJECT_NAMES.has(project)) {
    return Response.json({ ok: false, error: "Unknown case study." }, { status: 400 });
  }

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px; color: #4b378c;">Case study downloaded</h2>
      <p style="margin: 0 0 8px;"><strong>Case study:</strong> ${escapeHtml(project)}</p>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin: 0 0 8px;"><strong>Phone:</strong> ${phone ? escapeHtml(phone) : "Not provided"}</p>
    </div>
  `;
  const text = [
    "Case study downloaded",
    "",
    `Case study: ${project}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
  ].join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Case study download: ${project} (${name})`,
      html,
      text,
    });
    if (error) {
      console.error("[case-study] Resend error", error);
      return Response.json({ ok: false, error: "Could not send your request. Please try again." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[case-study] Unexpected error", err);
    return Response.json({ ok: false, error: "Could not send your request. Please try again." }, { status: 500 });
  }
}
