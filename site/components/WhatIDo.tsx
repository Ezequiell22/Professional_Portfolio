import type { Dictionary } from "@/lib/types";
import { Container, SectionHeading } from "./Section";
import FlowDiagram from "./FlowDiagram";
import Reveal from "./Reveal";

export default function WhatIDo({ t }: { t: Dictionary }) {
  const w = t.what;

  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={w.kicker} title={w.title} subtitle={w.subtitle} />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-6 md:p-7">
              <FlowDiagram steps={w.flow} />
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {w.blocks.map((block, i) => (
              <Reveal key={block.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {block.items}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
