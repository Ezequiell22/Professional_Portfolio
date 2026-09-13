import FlowDiagram from "./FlowDiagram";
import type { Dictionary, Project } from "@/lib/types";

function CaseLabel({ children }: { children: string }) {
  return (
    <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
      {children}
    </h4>
  );
}

export default function ProjectCard({
  project,
  t,
}: {
  project: Project;
  t: Dictionary;
}) {
  const w = t.work;
  const l = w.labels;
  const featured = Boolean(project.featured);

  return (
    <article
      className={`rounded-2xl border bg-surface p-6 transition-colors md:p-8 ${
        featured
          ? "border-accent-line/60 shadow-[0_0_0_1px_var(--color-accent-line)]"
          : "border-border hover:border-border-strong"
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
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-mono text-xs font-medium text-emerald-700">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 6.5L4.5 8.5L9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {w.completedLabel}
          </span>
        </div>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-faint">
          {project.category}
        </p>
      </header>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <CaseLabel>{l.problem}</CaseLabel>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <CaseLabel>{l.solution}</CaseLabel>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.solution}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-bg/50 p-4">
          <CaseLabel>{l.before}</CaseLabel>
          <div className="mt-3">
            <FlowDiagram steps={project.before.flow} />
          </div>
          {project.before.notes && project.before.notes.length > 0 ? (
            <ul className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3">
              {project.before.notes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-xs text-faint">
                  <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="rounded-xl border border-border bg-bg/50 p-4">
          <CaseLabel>{l.after}</CaseLabel>
          <div className="mt-3">
            <FlowDiagram steps={project.after.flow} />
          </div>
          {project.after.notes && project.after.notes.length > 0 ? (
            <ul className="mt-3 flex flex-col gap-1.5 border-t border-border pt-3">
              {project.after.notes.map((note) => (
                <li key={note} className="flex items-start gap-2 text-xs text-faint">
                  <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="mt-6">
        <CaseLabel>{l.impact}</CaseLabel>
        <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {project.impact.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.metrics && project.metrics.length > 0 ? (
        <div className="mt-6">
          <CaseLabel>{l.metricsToMeasure}</CaseLabel>
          <div className="mt-3 flex flex-col gap-2">
            {project.metrics.map((m) => (
              <div key={m.outcome} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-sm text-muted">{m.outcome}</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-faint">
                  <path d="M6 3.5L11 8L6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-mono text-sm text-fg">{m.metric}</span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-6">
        <CaseLabel>{l.aiArchitecture}</CaseLabel>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
