"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggleButton } from "@/components/Theme/ThemeToggleButton";
import { ElectricsLogo } from "@/components/Brand/ElectricsLogo";
import { ABOUT_NAV_LINKS, SERVICE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";

const navLinks = [
  { label: "Areas", href: "/areas" },
  { label: "Projects", href: "/projects" },
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

type DropdownItem = { label: string; href: string; imageSrc: string; blurb: string };

function NavDropdown({
  label,
  href,
  buttonLabel,
  items,
  footerLink,
  widthClass = "w-[22rem]",
}: {
  label: string;
  href: string;
  buttonLabel: string;
  items: readonly DropdownItem[];
  footerLink?: { label: string; href: string };
  widthClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="flex items-center">
        <Link
          href={href}
          className="text-foreground rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[#905bf4] active:text-[#905bf4]"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={buttonLabel}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="text-foreground -ml-1 inline-flex h-9 w-8 items-center justify-center rounded-md transition-colors hover:text-[#905bf4]"
        >
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {open ? (
        <div id={menuId} role="menu" className={`absolute left-0 top-full z-50 ${widthClass} pt-1`}>
          <div className="overflow-hidden rounded-md border border-[var(--border)] bg-[var(--surface)] py-2 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.45)] dark:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-[#905bf4]/08"
              >
                <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-sm">
                  <Image src={item.imageSrc} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="text-foreground block text-sm font-semibold leading-snug hover:text-[#905bf4]">
                    {item.label}
                  </span>
                  <span className="text-muted mt-0.5 block text-xs leading-snug line-clamp-2">{item.blurb}</span>
                </span>
              </Link>
            ))}
            {footerLink ? (
              <div className="mt-1 border-t border-[var(--border)] px-3 pt-2">
                <Link
                  href={footerLink.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
                >
                  {footerLink.label}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const navLinkClass =
  "text-foreground rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:text-[#905bf4] active:text-[#905bf4]";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <header className="electrics-desktop-nav sticky top-0 z-[70] hidden lg:block">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 xl:px-8">
        <Link href="/" aria-label="Excel Electrics home" className="shrink-0 py-2">
          <ElectricsLogo width={260} height={66} priority />
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-1 xl:gap-2">
          <NavDropdown
            label="Services"
            href="/services"
            buttonLabel="Service pages"
            items={SERVICE_NAV_LINKS}
            footerLink={{ label: "View all services", href: "/services" }}
          />

          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}

          <NavDropdown label="Why us" href="/why-us" buttonLabel="About pages" items={ABOUT_NAV_LINKS} widthClass="w-[20rem]" />

          <Link
            href="/contact"
            onClick={() => {
              if (pathname === "/contact") window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            }}
            className={navLinkClass}
          >
            Contact
          </Link>
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
