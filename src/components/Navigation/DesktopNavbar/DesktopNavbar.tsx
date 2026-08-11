"use client";

import { useEffect, useId, useRef, useState } from "react";
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

export function DesktopNavbar() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  return (
    <header className="electrics-desktop-nav sticky top-0 z-[70] hidden lg:block">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 xl:px-8">
        <Link href="/" aria-label="Excel Electrics home" className="shrink-0 py-2">
          <ElectricsLogo width={260} height={66} priority />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-1 xl:gap-2">
          <div
            ref={wrapRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="flex items-center">
              <Link
                href="/services"
                className="text-foreground rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[#905bf4] active:text-[#905bf4]"
              >
                Services
              </Link>
              <button
                type="button"
                aria-label="Service pages"
                aria-expanded={servicesOpen}
                aria-controls={menuId}
                onClick={() => setServicesOpen((open) => !open)}
                className="text-foreground -ml-1 inline-flex h-9 w-8 items-center justify-center rounded-md transition-colors hover:text-[#905bf4]"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {servicesOpen ? (
              <div
                id={menuId}
                role="menu"
                className="absolute left-0 top-full z-50 w-[22rem] pt-1"
              >
                <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] py-2 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)]">
                  {SERVICE_NAV_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-[#905bf4]/08"
                    >
                      <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-sm">
                        <Image
                          src={item.imageSrc}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="text-foreground block text-sm font-semibold leading-snug hover:text-[#905bf4]">
                          {item.label}
                        </span>
                        <span className="text-muted mt-0.5 block text-xs leading-snug line-clamp-2">
                          {item.blurb}
                        </span>
                      </span>
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-[var(--border)] px-3 pt-2">
                    <Link
                      href="/services"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className="block py-2 text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (item.href === "/contact" && pathname === "/contact") {
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }
              }}
              className="text-foreground rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[#905bf4] active:text-[#905bf4]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#enquiry-form"
            onClick={() => {
              if (pathname === "/contact") {
                window.requestAnimationFrame(() => {
                  const el = document.getElementById("enquiry-form");
                  if (!el) return;
                  const top = el.getBoundingClientRect().top + window.scrollY - 72;
                  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
                });
              }
            }}
            className="ml-2 inline-flex items-center rounded-md bg-[#905bf4] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(75,1,184,0.92)] transition hover:bg-[#905bf4] hover:text-white"
          >
            Get a quote
          </Link>
          <ThemeToggleButton className="ml-1 dark:hover:bg-white/10" />
        </nav>
      </div>
    </header>
  );
}
