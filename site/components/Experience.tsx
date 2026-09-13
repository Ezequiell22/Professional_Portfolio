import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

export default function Experience({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <SectionHeading kicker={t.experience.kicker} title={t.experience.title} />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {t.experience.body}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
              <ul className="flex flex-col gap-3">
                {t.experience.areas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-sm text-muted sm:text-base">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-line" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
