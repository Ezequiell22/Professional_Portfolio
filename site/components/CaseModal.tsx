"use client";

import { useEffect } from "react";
import type { Dictionary, Project } from "@/lib/types";
import FlowDiagram from "./FlowDiagram";

function DetailLabel({ children }: { children: string }) {
  return (
    <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-accent-bright">
      {children}
    </h4>
  );
}

export default function CaseModal({
  project,
  t,
  onClose,
}: {
  project: Project;
  t: Dictionary;
  onClose: () => void;
}) {
  const l = t.work.labels;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border bg-bg sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-bg/90 px-6 py-4 backdrop-blur-md md:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-dim px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-bright">
              {project.status}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
              {project.category}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.work.close}
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-8 md:px-8">
          <h3 className="text-2xl font-semibold tracking-tight text-fg md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">{project.tagline}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-faint">
            {project.role}
          </p>

          <div className="mt-8 flex flex-col gap-7">
            <section>
              <DetailLabel>{l.problem}</DetailLabel>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
            </section>

            <section>
              <DetailLabel>{l.opportunity}</DetailLabel>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.opportunity}</p>
            </section>

            <section>
              <DetailLabel>{l.product}</DetailLabel>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.product}</p>
            </section>

            <section>
              <DetailLabel>{l.architecture}</DetailLabel>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.architecture}</p>
              <div className="mt-4 rounded-xl border border-border bg-surface p-4">
                <FlowDiagram steps={project.architectureFlow} />
              </div>
            </section>

            <section>
              <DetailLabel>{l.ai}</DetailLabel>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.aiItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <DetailLabel>{l.decisions}</DetailLabel>
              <ul className="mt-3 flex flex-col gap-2.5">
                {project.decisions.map((decision) => (
                  <li key={decision} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
                    {decision}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <DetailLabel>{l.impact}</DetailLabel>
              <ul className="mt-3 flex flex-col gap-2.5">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-border bg-surface p-5">
              <DetailLabel>{l.successMetrics}</DetailLabel>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-fg"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </section>

            <section className="border-t border-border pt-6">
              <DetailLabel>{l.myRole}</DetailLabel>
              <p className="mt-2 text-sm font-medium leading-relaxed text-fg">{project.role}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
