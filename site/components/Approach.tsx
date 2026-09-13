import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Approach({ t }: { t: Dictionary }) {
  const a = t.approach;

  return (
    <section id="approach" className="scroll-mt-24 border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={a.kicker} title={a.title} subtitle={a.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {a.steps.map((step, i) => (
            <Reveal key={step.id} delay={(i % 3) * 60}>
              <div className="group h-full bg-surface p-6 transition-colors hover:bg-surface-2">
                <span className="font-mono text-sm text-accent-bright">{step.id}</span>
                <h3 className="mt-3 text-base font-semibold text-fg">{step.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-base font-semibold tracking-tight text-fg">{a.measureTitle}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{a.measureNote}</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {a.metricGroups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-bright">
                    {group.label}
                  </p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
