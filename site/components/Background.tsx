import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Background({ t }: { t: Dictionary }) {
  const b = t.background;

  return (
    <section id="about" className="scroll-mt-24 border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading kicker={b.kicker} title={b.title} />
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-fg sm:text-lg">
              {b.message}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {b.body}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-7">
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-faint">
                {b.pathLabel}
              </h3>
              <div className="mt-5 flex flex-col">
                {b.progression.map((step, i) => (
                  <div key={step}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent-bright">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-fg sm:text-base">{step}</span>
                    </div>
                    {i < b.progression.length - 1 ? (
                      <div className="my-2 ml-[9px] flex items-center" aria-hidden="true">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
                          <line
                            x1="5"
                            y1="0"
                            x2="5"
                            y2="14"
                            stroke="var(--color-accent-line)"
                            strokeWidth="1.25"
                            className="flow-dash"
                          />
                          <path
                            d="M2 12L5 15L8 12"
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
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
