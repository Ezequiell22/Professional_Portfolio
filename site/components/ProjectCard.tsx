import type { Dictionary, Project } from "@/lib/types";

function CardLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-faint">
      {children}
    </p>
  );
}

export default function ProjectCard({
  project,
  t,
  onView,
}: {
  project: Project;
  t: Dictionary;
  onView: () => void;
}) {
  const l = t.work.labels;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong md:p-8">
      <header>
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-line bg-accent-dim px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent-bright">
            {project.status}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-fg md:text-2xl">
          {project.name}
        </h3>
        <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-faint">
          {project.category}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.tagline}</p>
      </header>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
          >
            {cap}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5">
        <div>
          <CardLabel>{l.problem}</CardLabel>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <CardLabel>{l.product}</CardLabel>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.product}</p>
        </div>
        <div>
          <CardLabel>{l.impact}</CardLabel>
          <ul className="mt-2 flex flex-col gap-1.5">
            {project.impact.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={onView}
        className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-accent-bright transition-opacity hover:opacity-80"
      >
        {t.work.viewCase}
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M6 3.5L11 8L6 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </article>
  );
}
