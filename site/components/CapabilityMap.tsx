"use client";

import { useState } from "react";
import type { CapabilityArea, Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

function CapabilityCard({
  area,
  t,
}: {
  area: CapabilityArea;
  t: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const c = t.capabilities;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong md:p-7">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sm text-accent-bright">{area.id}</span>
        <h3 className="text-lg font-semibold tracking-tight text-fg md:text-xl">
          {area.title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{area.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent-bright transition-opacity hover:opacity-80"
      >
        {open ? c.collapseLabel : c.expandLabel}
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <ul className="mt-5 grid grid-cols-1 gap-x-4 gap-y-2.5 border-t border-border pt-5 min-[420px]:grid-cols-2">
          {area.details.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function CapabilityMap({ t }: { t: Dictionary }) {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-t border-border bg-surface/40 py-24 md:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            kicker={t.capabilities.kicker}
            title={t.capabilities.title}
            subtitle={t.capabilities.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {t.capabilities.areas.map((area, i) => (
            <Reveal key={area.id} delay={i * 60}>
              <CapabilityCard area={area} t={t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
