"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { ElectricsLogo } from "@/components/Brand/ElectricsLogo";
import { SERVICE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";

const navLinks = [
  { label: "Why us", href: "/why-us" },
  { label: "Areas", href: "/areas" },
  { label: "Contact", href: "/contact" },
];

const SCROLL_LOCK_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
]);

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /**
   * Do not set `body { overflow: hidden }` — that turns body into a scroll
   * container and snaps every `position: sticky` descendant (including this
   * header) out of sticky, so the bar vanishes while the dropdown stays.
   * Intercept scroll gestures instead; the document stays the scroll root.
   */
  useEffect(() => {
    if (!isOpen) return;

    const isInPanel = (target: EventTarget | null) => {
      const panel = document.getElementById("mobile-nav-panel");
      return Boolean(panel && target instanceof Node && panel.contains(target));
    };

    const onWheel = (event: WheelEvent) => {
      if (!isInPanel(event.target)) event.preventDefault();
    };
    const onTouchMove = (event: TouchEvent) => {
      if (!isInPanel(event.target)) event.preventDefault();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (SCROLL_LOCK_KEYS.has(event.key) && !isInPanel(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", onWheel, { passive: false, capture: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false, capture: true });
    document.addEventListener("keydown", onKeyDown, { capture: true });

    return () => {
      document.removeEventListener("wheel", onWheel, { capture: true });
      document.removeEventListener("touchmove", onTouchMove, { capture: true });
      document.removeEventListener("keydown", onKeyDown, { capture: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setServicesOpen(false);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const close = () => setIsOpen(false);

  return (
    <header className="electrics-desktop-nav sticky top-0 z-[120] lg:hidden">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Excel Electrics home" className="min-w-0 flex-1 py-1 pr-3" onClick={close}>
          <ElectricsLogo width={224} height={58} className="h-auto w-full max-w-[224px]" priority />
        </Link>

        <div className="shrink-0 flex items-center gap-2">
          <ThemeToggleButton className="dark:hover:bg-white/10" />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border hover:border-brand-blue hover:text-brand-blue dark:hover:border-brand-blue dark:hover:bg-white/10 dark:hover:text-brand-blue"
            style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[73px] z-[110] bg-black/50"
          />
          <div
            id="mobile-nav-panel"
            className="electrics-desktop-nav absolute inset-x-0 top-full z-[120] max-h-[min(70vh,calc(100svh-73px))] overflow-y-auto shadow-lg"
          >
            <nav aria-label="Mobile navigation" className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
              <div className="flex items-center">
                <Link
                  href="/services"
                  onClick={close}
                  className="text-foreground flex-1 rounded-md px-3 py-3 text-sm font-semibold transition-colors hover:text-[#905bf4] active:text-[#905bf4]"
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-label="Service pages"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((open) => !open)}
                  className="text-foreground inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:text-[#905bf4]"
                >
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {servicesOpen ? (
                <div className="mb-2 space-y-1 border-l border-[#4b378c]/30 pl-3">
                  {SERVICE_NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-[#905bf4]/08"
                    >
                      <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-sm">
                        <Image src={item.imageSrc} alt="" fill sizes="56px" className="object-cover" />
                      </span>
                      <span className="min-w-0">
                        <span className="text-foreground block text-sm font-semibold leading-snug">
                          {item.label}
                        </span>
                        <span className="text-muted mt-0.5 block text-xs leading-snug line-clamp-2">
                          {item.blurb}
                        </span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={close}
                    className="block px-2 py-2.5 text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
                  >
                    View all services
                  </Link>
                </div>
              ) : null}

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    close();
                    if (item.href === "/contact" && pathname === "/contact") {
                      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                    }
                  }}
                  className="text-foreground rounded-md px-3 py-3 text-sm font-semibold transition-colors hover:text-[#905bf4] active:text-[#905bf4]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact#enquiry-form"
                onClick={() => {
                  close();
                  if (pathname === "/contact") {
                    window.requestAnimationFrame(() => {
                      const el = document.getElementById("enquiry-form");
                      if (!el) return;
                      const top = el.getBoundingClientRect().top + window.scrollY - 72;
                      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
                    });
                  }
                }}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#905bf4] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(75,1,184,0.92)] transition hover:bg-[#905bf4] hover:text-white"
                style={{ color: "#ffffff" }}
              >
                Get a quote
              </Link>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
