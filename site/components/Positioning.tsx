import type { Dictionary } from "@/lib/types";
import { Container, Kicker } from "./Section";
import Reveal from "./Reveal";

export default function Positioning({ t }: { t: Dictionary }) {
  const { flow } = t.positioning;

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <Kicker>{t.positioning.kicker}</Kicker>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {t.positioning.title}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 flex flex-col items-stretch gap-0 lg:flex-row lg:items-center lg:gap-2">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center">
                <div className="flex flex-1 items-center rounded-lg border border-border bg-surface px-4 py-3 text-center">
                  <span className="w-full font-mono text-xs font-medium uppercase tracking-[0.14em] text-fg">
                    {step}
                  </span>
                </div>
                {i < flow.length - 1 ? (
                  <div className="flex justify-center py-1 lg:px-1 lg:py-0" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="rotate-90 text-faint lg:rotate-0"
                    >
                      <path
                        d="M6 3.5L11 8L6 12.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-12 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {t.positioning.message}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
