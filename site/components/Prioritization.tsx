import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Prioritization({ t }: { t: Dictionary }) {
  const p = t.prioritization;

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={p.kicker} title={p.title} />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 md:p-10">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {p.formulaTop.map((term, i) => (
                <span key={term} className="flex items-center gap-3">
                  <span className="rounded-lg border border-border bg-surface-2 px-4 py-2.5 font-mono text-sm font-medium tracking-wide text-fg">
                    {term}
                  </span>
                  {i < p.formulaTop.length - 1 ? (
                    <span className="font-mono text-lg text-faint" aria-hidden="true">
                      ×
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="font-mono text-lg text-faint" aria-hidden="true">
                ÷
              </span>
              <span className="rounded-lg border border-accent-line bg-accent-dim px-4 py-2.5 font-mono text-sm font-medium tracking-wide text-accent-bright">
                {p.formulaBottom}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-1.5 border-t border-border pt-6">
              {p.criteria.map((criterion) => (
                <span
                  key={criterion}
                  className="rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted"
                >
                  {criterion}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
