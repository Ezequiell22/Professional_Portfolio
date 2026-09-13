import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
      <span className="h-px w-6 bg-accent-line" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  className = "",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
