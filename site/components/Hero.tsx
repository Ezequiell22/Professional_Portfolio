import { LINKS } from "@/lib/site";
import type { Dictionary } from "@/lib/types";

export default function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(99,102,241,0.14), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 pt-28 pb-16 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-line bg-accent-dim px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-bright pulse-dot" aria-hidden="true" />
            <span className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-bright">
              {h.badge}
            </span>
          </div>

          <p className="mt-8 font-mono text-sm font-medium uppercase tracking-[0.28em] text-muted">
            {h.name}
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl md:text-6xl">
            {h.titleTop}
            <br />
            <span className="text-muted">{h.titleBottom}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {h.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
            {h.tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                {tag}
                {i < h.tags.length - 1 ? (
                  <span className="text-accent-line" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-full bg-fg px-7 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              {h.primaryCta}
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-surface px-7 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-2"
            >
              {h.secondaryCta}
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
      </div>
    </section>
  );
}
