import { useT } from '../../i18n';

export function PriceCard({ plan, selected, onSelect, ctaLabel }) {
  const t = useT();
  return (
    <div className={`price-card ${plan.recommended ? 'recommend' : ''}`}>
      {plan.recommended && <div className="recommend-badge">{t('추천')}</div>}
      <div className="label">{plan.label}</div>
      <div className="price">{t(plan.price)}</div>
      <ul>
        {plan.features.map((f) => (
          <li key={f}>{t(f)}</li>
        ))}
      </ul>
      <button
        type="button"
        className={`wf-btn grow ${selected || plan.recommended ? 'accent' : ''}`}
        style={{ textAlign: 'center', marginTop: 'auto' }}
        onClick={() => onSelect(plan)}
      >
        {ctaLabel ?? `${plan.label} ${t('선택')}`}
      </button>
    </div>
  );
}
