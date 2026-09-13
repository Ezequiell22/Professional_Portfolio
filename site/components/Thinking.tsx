import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

function DiagramNode({ label, accent = false }: { label: string; accent?: boolean }) {
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

export default function Thinking({ t }: { t: Dictionary }) {
  const th = t.thinking;

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={th.kicker} title={th.title} subtitle={th.intro} />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-4">
            {th.tensions.map((tension, i) => (
              <Reveal key={tension.title} delay={i * 60}>
                <div className="flex gap-5 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong md:p-6">
                  <span className="font-mono text-sm text-accent-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-fg md:text-lg">
                      {tension.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{tension.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
                <div className="mx-auto max-w-sm">
                  <DiagramNode label={th.top} accent />
                  <VConnector />
                  <div className="grid grid-cols-3 gap-2">
                    {th.middle.map((label) => (
                      <DiagramNode key={label} label={label} />
                    ))}
                  </div>
                  <VConnector />
                  <DiagramNode label={th.bottom} />
                </div>
              </div>
              <p className="mt-5 text-center text-sm leading-relaxed text-muted">
                {th.diagramCaption}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
