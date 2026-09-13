import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

function Node({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-lg border px-4 py-2.5 text-center font-mono text-xs font-medium uppercase tracking-[0.12em] ${
        accent
          ? "border-accent-line bg-accent-dim text-accent-bright"
          : "border-border bg-surface text-fg"
      }`}
    >
      {label}
    </div>
  );
}

function VConnector() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden="true">
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
        <line
          x1="7"
          y1="0"
          x2="7"
          y2="16"
          stroke="var(--color-accent-line)"
          strokeWidth="1.25"
          className="flow-dash"
        />
        <path d="M3 13L7 18L11 13" stroke="var(--color-accent-line)" strokeWidth="1.25" fill="none" />
      </svg>
    </div>
  );
}

export default function DecisionFramework({ t }: { t: Dictionary }) {
  const f = t.framework;

  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={f.kicker} title={f.title} />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <div className="mx-auto max-w-sm">
                <Node label={f.top} accent />
                <VConnector />
                <div className="grid grid-cols-3 gap-2">
                  {f.middle.map((label) => (
                    <Node key={label} label={label} />
                  ))}
                </div>
                <VConnector />
                <Node label={f.bottom} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-lg font-medium text-fg">{f.explanation}</p>
            <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-faint">
              {f.questionsTitle}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {f.questions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-0.5 shrink-0 text-accent-bright"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {q}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
