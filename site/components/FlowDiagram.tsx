import type { FlowStep } from "@/lib/types";

function StepNode({ step }: { step: FlowStep }) {
  if (typeof step === "string") {
    return (
      <div className="rounded-lg border border-border bg-surface px-4 py-2.5 text-center text-sm font-medium text-fg transition-colors group-hover:border-accent-line">
        {step}
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-surface px-4 py-3">
      <p className="mb-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
        {step.label}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {step.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center py-1" aria-hidden="true">
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="text-accent-line">
        <line
          x1="7"
          y1="0"
          x2="7"
          y2="18"
          stroke="currentColor"
          strokeWidth="1.25"
          className="flow-dash"
        />
        <path d="M3 15 L7 20 L11 15" stroke="currentColor" strokeWidth="1.25" fill="none" />
      </svg>
    </div>
  );
}

export default function FlowDiagram({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="group">
      {steps.map((step, i) => (
        <div key={i}>
          <StepNode step={step} />
          {i < steps.length - 1 ? <Connector /> : null}
        </div>
      ))}
    </div>
  );
}
