export function PriceCard({ plan, selected, onSelect, ctaLabel }) {
  return (
    <div className={`price-card ${plan.recommended ? 'recommend' : ''}`}>
      {plan.recommended && <div className="recommend-badge">추천</div>}
      <div className="label">{plan.label}</div>
      <div className="price">{plan.price}</div>
      <ul>
        {plan.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button
        type="button"
        className={`wf-btn grow ${selected || plan.recommended ? 'accent' : ''}`}
        style={{ textAlign: 'center', marginTop: 'auto' }}
        onClick={() => onSelect(plan)}
      >
        {ctaLabel ?? `${plan.label} 선택`}
      </button>
    </div>
  );
}
