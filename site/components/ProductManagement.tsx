import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function ProductManagement({ t }: { t: Dictionary }) {
  const pm = t.productManagement;

  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={pm.kicker} title={pm.title} subtitle={pm.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="flex flex-col">
              {pm.lifecycle.map((step, i) => (
                <div key={step}>
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-surface px-4 py-2.5">
                    <span className="font-mono text-xs text-accent-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-fg">
                      {step}
                    </span>
                  </div>
                  {i < pm.lifecycle.length - 1 ? (
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
            <p className="text-lg font-medium leading-relaxed text-fg sm:text-xl">
              {pm.statement}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
