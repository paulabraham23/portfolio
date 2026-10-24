"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md">
      <div className="container flex h-[var(--nav-h)] items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold tracking-[-0.02em] no-underline hover:text-[var(--accent)]"
        >
          {site.profile.wordmark}
        </Link>

        <nav className="kbd-nav hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--fg-muted)] no-underline transition-colors hover:text-[var(--fg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-[var(--border-strong)] text-[var(--fg)] lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close" : "Menu"}</span>
          <span aria-hidden className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[5.5px] h-px w-full bg-current transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[11px] h-px w-full bg-current transition ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        hidden={!open}
        className="border-t border-[var(--border)] bg-[var(--bg)] lg:hidden"
      >
        <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-[var(--border)] py-3 text-lg no-underline"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
