import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import Reveal from "./Reveal";

function DimensionCard({
  title,
  question,
  accent = false,
}: {
  title: string;
  question: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 text-center ${
        accent
          ? "border-accent-line bg-accent-dim"
          : "border-border bg-surface"
      }`}
    >
      <h3
        className={`font-mono text-sm font-semibold uppercase tracking-[0.16em] ${
          accent ? "text-accent-bright" : "text-fg"
        }`}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{question}</p>
    </div>
  );
}

export default function DecisionFramework({ t }: { t: Dictionary }) {
  const f = t.framework;
  const [top, ...middle] = f.dimensions;
  const bottom = middle.pop();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={f.kicker} title={f.title} subtitle={f.subtitle} />
        </Reveal>

        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <DimensionCard title={top.title} question={top.question} accent />
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {middle.map((dim, i) => (
              <Reveal key={dim.title} delay={(i + 1) * 60}>
                <DimensionCard title={dim.title} question={dim.question} />
              </Reveal>
            ))}
          </div>

          {bottom ? (
            <Reveal delay={200}>
              <div className="mt-4">
                <DimensionCard title={bottom.title} question={bottom.question} />
              </div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
