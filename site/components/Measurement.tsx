import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Measurement({ t }: { t: Dictionary }) {
  const m = t.measure;

  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={m.kicker} title={m.title} />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
              {m.chainLabel}
            </h3>
            <div className="mt-6 flex flex-col">
              {m.chain.map((item, i) => (
                <div key={item.label}>
                  <div className="rounded-lg border border-border bg-surface px-4 py-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-bright">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-fg">{item.example}</p>
                  </div>
                  {i < m.chain.length - 1 ? (
                    <div className="flex justify-center py-1" aria-hidden="true">
                      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                        <line
                          x1="7"
                          y1="0"
                          x2="7"
                          y2="14"
                          stroke="var(--color-accent-line)"
                          strokeWidth="1.25"
                          className="flow-dash"
                        />
                        <path
                          d="M3 12L7 16L11 12"
                          stroke="var(--color-accent-line)"
                          strokeWidth="1.25"
                          fill="none"
                        />
                      </svg>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                {m.okrTitle}
              </h3>

              <div className="mt-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-bright">
                  {m.objectiveLabel}
                </p>
                <p className="mt-1.5 text-lg font-semibold tracking-tight text-fg">
                  {m.objective}
                </p>
              </div>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  {m.keyResultsLabel}
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {m.keyResults.map((kr) => (
                    <li key={kr} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
                      {kr}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
                {m.metricGroups.map((group) => (
                  <div key={group.label}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-bright">
                      {group.label}
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="text-xs leading-relaxed text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-border pt-4 text-xs text-faint">
                {m.disclaimer}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
