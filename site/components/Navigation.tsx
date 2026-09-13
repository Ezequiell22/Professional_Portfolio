"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { LANGS } from "@/lib/dictionaries";
import type { Dictionary } from "@/lib/types";

const NAV_IDS = ["work", "approach", "about", "stack", "contact"] as const;

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-border bg-surface p-0.5 ${
        compact ? "text-xs" : "text-sm"
      }`}
    >
      {LANGS.map(({ code, label }) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 font-mono text-xs font-medium transition-colors ${
              active
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default function Navigation({ t }: { t: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLabel = (id: (typeof NAV_IDS)[number]) => t.nav[id];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-8">
        <a
          href="#top"
          className="text-[15px] font-semibold tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          {t.nav.logo}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
            >
              {navLabel(id)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LangSwitch />
          </div>
          <a
            href="#contact"
            className="hidden h-9 items-center justify-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-85 md:inline-flex"
          >
            {t.nav.connect}
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted hover:text-fg md:hidden"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4L16 16M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6H17M3 10H17M3 14H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-muted transition-colors hover:bg-surface hover:text-fg"
              >
                {navLabel(id)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
            >
              {t.nav.connect}
            </a>
            <div className="mt-3 flex items-center justify-between border-t border-border px-3 py-3">
              <span className="text-xs text-faint">{t.langSwitch.label}</span>
              <LangSwitch />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
