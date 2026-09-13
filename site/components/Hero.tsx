import { LINKS } from "@/lib/site";
import type { Dictionary } from "@/lib/types";

export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(129,140,248,0.16), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-16 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-line bg-accent-dim px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright pulse-dot" aria-hidden="true" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-bright">
              {t.hero.role}
            </span>
          </div>

          <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {t.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-fg px-7 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              {t.hero.primaryCta}
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-2"
            >
              {t.hero.secondaryCta}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3.5L11 8L6 12.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-2.5 text-sm text-faint">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
            <circle cx="8" cy="8" r="2" fill="currentColor" />
          </svg>
          {t.hero.location}
        </div>
      </div>
    </section>
  );
}
