import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function CapabilityMap({ t }: { t: Dictionary }) {
  return (
    <section id="capabilities" className="scroll-mt-24 border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={t.capabilities.kicker}
            title={t.capabilities.title}
            subtitle={t.capabilities.subtitle}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {t.capabilities.areas.map((area, i) => (
            <Reveal key={area.id} delay={i * 60}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong md:p-8">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent-bright">{area.id}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-fg md:text-xl">
                    {area.title}
                  </h3>
                </div>
                <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 min-[420px]:grid-cols-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
