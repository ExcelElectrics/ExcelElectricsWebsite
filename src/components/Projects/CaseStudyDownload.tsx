"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { inputClass, labelClass, primaryBtnClass } from "@/components/Electrics/ServiceLanding/serviceLandingShared";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type CaseStudyDownloadProps = {
  projectName: string;
  pdfHref: string;
  pdfFilename: string;
};

type Status = "idle" | "sending" | "success" | "error";

function IconDownload({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

/** Lead-magnet gate: name + email (via /api/case-study) unlocks the PDF. */
export function CaseStudyDownload({ projectName, pdfHref, pdfFilename }: CaseStudyDownloadProps) {
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setErrorMessage("Please wait a moment for the verification to finish, then try again.");
      setStatus("error");
      return;
    }

    formData.set("turnstileToken", turnstileToken);
    formData.set("project", projectName);
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/case-study", { method: "POST", body: formData });
      const data = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        turnstileRef.current?.reset();
        setTurnstileToken("");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-14">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">Case study</p>
        <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Download the full {projectName} case study
        </h2>
        <p className="text-muted mt-3 text-sm leading-relaxed md:text-[15px] md:leading-7">
          A two-page PDF with the brief, how we delivered it and photos from site. Pop your name and email in and
          it&apos;s yours to keep or share.
        </p>
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
        {status === "success" ? (
          <div className="space-y-4" role="status">
            <p className="text-foreground text-base font-semibold">Thanks, your case study is ready.</p>
            <a href={pdfHref} download={pdfFilename} className={`${primaryBtnClass} w-full`}>
              <IconDownload className="h-5 w-5" />
              Download PDF
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot: hidden from people, tempting to bots. */}
            <div className="hidden" aria-hidden>
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block space-y-1.5">
                <span className={labelClass}>Name</span>
                <input name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
              </label>
              <label className="block space-y-1.5">
                <span className={labelClass}>Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block space-y-1.5">
              <span className={labelClass}>Phone (optional)</span>
              <input name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="So we can call if helpful" />
            </label>
            {TURNSTILE_SITE_KEY ? (
              <Turnstile
                ref={turnstileRef}
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={setTurnstileToken}
                onExpire={() => setTurnstileToken("")}
                onError={() => setTurnstileToken("")}
                options={{ theme: "auto", size: "flexible" }}
              />
            ) : null}
            {status === "error" && errorMessage ? (
              <p className="text-sm font-medium text-red-600" role="alert">
                {errorMessage}
              </p>
            ) : null}
            <button type="submit" className={`${primaryBtnClass} w-full`} disabled={status === "sending"}>
              <IconDownload className="h-5 w-5" />
              {status === "sending" ? "Sending…" : "Get the case study"}
            </button>
            <p className="text-muted text-xs leading-relaxed">
              We&apos;ll only use your details to follow up about this case study. See our{" "}
              <Link href="/legal/privacy-policy" className="font-semibold text-[#905bf4] underline-offset-4 hover:underline">
                privacy policy
              </Link>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
