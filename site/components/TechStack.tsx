import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function TechStack({ t }: { t: Dictionary }) {
  return (
    <section id="stack" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={t.stack.kicker}
            title={t.stack.title}
            subtitle={t.stack.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.stack.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 50}>
              <div className="h-full rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-border-strong">
                <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent-bright">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.items}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
