// Sponsorship application funnel indicator (SC-17~20 style)
export function FlowSteps({ steps, current }) {
  return (
    <div className="flow-steps">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const state = stepNum < current ? 'done' : stepNum === current ? 'active' : '';
        return (
          <span key={label} style={{ display: 'contents' }}>
            <div className={`flow-step ${state}`}>
              <div className="num-circle">{stepNum < current ? '✓' : stepNum}</div>
              {label}
            </div>
            {i < steps.length - 1 && <div className="flow-step-sep" />}
          </span>
        );
      })}
    </div>
  );
}
