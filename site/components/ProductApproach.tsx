import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function ProductApproach({ t }: { t: Dictionary }) {
  return (
    <section id="approach" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.approach.kicker} title={t.approach.title} />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.approach.steps.map((step, i) => (
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
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {t.approach.message}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
