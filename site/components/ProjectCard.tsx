"use client";

import { useState } from "react";
import FlowDiagram from "./FlowDiagram";
import type { Dictionary, Project, StatusKey } from "@/lib/types";

const STATUS_STYLES: Record<StatusKey, string> = {
  concept: "border-border bg-surface text-muted",
  prototype: "border-amber-400/40 bg-amber-400/10 text-amber-700",
  experiment: "border-sky-400/40 bg-sky-400/10 text-sky-700",
  development: "border-accent-line bg-accent-dim text-accent-bright",
  production: "border-emerald-400/40 bg-emerald-400/10 text-emerald-700",
};

function CaseItem({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h5 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
        {label}
      </h5>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}

export default function ProjectCard({
  project,
  t,
}: {
  project: Project;
  t: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const w = t.work;
  const featured = Boolean(project.featured);

  return (
    <article
      className={`relative rounded-2xl border bg-surface p-6 transition-colors md:p-8 ${
        featured ? "border-accent-line/60 shadow-[0_0_0_1px_var(--color-accent-line)]" : "border-border hover:border-border-strong"
      }`}
    >
      <header>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-fg md:text-2xl">
              {project.name}
            </h3>
            {featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-dim px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-bright">
                {w.featuredLabel}
              </span>
            ) : null}
          </div>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-medium ${STATUS_STYLES[project.status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            {w.statuses[project.status]}
          </span>
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-faint">
          {project.category}
        </p>
        {project.tagline ? (
          <p className="mt-4 text-sm font-medium text-accent-bright">{project.tagline}</p>
        ) : null}
        <p className="mt-3 text-base leading-relaxed text-muted">{project.description}</p>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h4 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
            {w.flowLabel}
          </h4>
          <FlowDiagram steps={project.flow} />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h4 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
              {w.conceptsLabel}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.concepts.map((concept) => (
                <span
                  key={concept}
                  className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-3"
            >
              {open ? w.caseStudyClose : w.caseStudyLabel}
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
              <div className="mt-6 grid gap-6 rounded-xl border border-border bg-bg/60 p-5 sm:grid-cols-2">
                <CaseItem label={w.sections.problem} text={project.caseStudy.problem} />
                <CaseItem label={w.sections.product} text={project.caseStudy.product} />
                <CaseItem label={w.sections.architecture} text={project.caseStudy.architecture} />
                <CaseItem label={w.sections.decisions} text={project.caseStudy.decisions} />
                <CaseItem label={w.sections.challenges} text={project.caseStudy.challenges} />
                <CaseItem label={w.sections.tradeoffs} text={project.caseStudy.tradeoffs} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
