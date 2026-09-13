import { Fragment } from "react";
import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

function PlusSeparator() {
  return (
    <div className="flex items-center justify-center py-1 text-faint lg:px-1 lg:py-0" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 3V15M3 9H15"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function Intersection({ t }: { t: Dictionary }) {
  const { circles, center, message } = t.intersection;

  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.intersection.kicker} title={t.intersection.title} />
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <div className="flex flex-col items-stretch lg:flex-row lg:items-stretch lg:justify-center">
              {circles.map((circle, i) => (
                <Fragment key={circle.title}>
                  <div className="relative flex-1 rounded-2xl border border-border bg-surface p-6 lg:max-w-xs">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-2xl opacity-60"
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(129,140,248,0.10), transparent 70%)",
                      }}
                      aria-hidden="true"
                    />
                    <h3 className="relative text-center font-mono text-sm font-semibold uppercase tracking-[0.2em] text-accent-bright">
                      {circle.title}
                    </h3>
                    <ul className="relative mt-5 flex flex-col items-center gap-2">
                      {circle.items.map((item) => (
                        <li key={item} className="text-sm text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < circles.length - 1 ? <PlusSeparator /> : null}
                </Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-center">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
                <line
                  x1="8"
                  y1="0"
                  x2="8"
                  y2="16"
                  stroke="var(--color-accent-line)"
                  strokeWidth="1.25"
                  className="flow-dash"
                />
                <path
                  d="M4 13L8 18L12 13"
                  stroke="var(--color-accent-line)"
                  strokeWidth="1.25"
                  fill="none"
                />
              </svg>
              <div className="mt-3 flex h-28 w-28 items-center justify-center rounded-full border border-accent-line bg-accent-dim p-2 sm:h-32 sm:w-32">
                <div className="flex h-full w-full items-center justify-center rounded-full border border-accent-line/60 bg-surface text-center">
                  <span className="px-4 text-sm font-semibold uppercase tracking-wide text-fg">
                    {center}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-muted sm:text-lg">
              {message}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
