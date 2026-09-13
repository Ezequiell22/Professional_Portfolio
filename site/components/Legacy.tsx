import type { Dictionary } from "@/lib/types";
import { Container, Kicker } from "./Section";
import Reveal from "./Reveal";

export default function Legacy({ t }: { t: Dictionary }) {
  return (
    <section className="border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Kicker>{t.legacy.kicker}</Kicker>
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
              {t.legacy.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {t.legacy.message}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
