import type { Dictionary } from "@/lib/types";
import { Container } from "./Section";

export default function Footer({ t }: { t: Dictionary }) {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-semibold text-fg">{t.footer.name}</p>
          <p className="max-w-md font-mono text-xs uppercase tracking-[0.14em] text-faint">
            {t.footer.tagline}
          </p>
          <p className="text-xs text-faint">{t.footer.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
