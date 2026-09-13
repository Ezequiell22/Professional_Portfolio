import { LINKS, EMAIL_HREF } from "@/lib/site";
import type { Dictionary } from "@/lib/types";
import { Container } from "./Section";
import Reveal from "./Reveal";

export default function Cta({ t }: { t: Dictionary }) {
  const c = t.cta;

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface/40 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center md:px-12 md:py-20">
            <h2 className="relative text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              {c.title}
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {c.text}
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-white transition-colors hover:bg-accent-bright sm:w-auto"
              >
                {c.linkedin}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M6 3.5L11 8L6 12.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-surface-2 px-7 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface-3 sm:w-auto"
              >
                {c.contact}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
