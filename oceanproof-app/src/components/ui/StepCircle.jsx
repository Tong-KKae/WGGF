import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n';

export function StepCircle({ state, children, large = false }) {
  const cls = ['step-circle'];
  if (large) cls.push('lg');
  if (state === 'done') cls.push('done');
  if (state === 'active') cls.push('accent');
  return <div className={cls.join(' ')}>{children}</div>;
}

export function MrvSteps({ steps }) {
  const t = useT();
  const { lang } = useApp();
  return (
    <div className="wf-card pad24 col gap20">
      {steps.map((s, i) => (
        <div className="row gap16" key={s.step}>
          <div className="col" style={{ alignItems: 'center' }}>
            <StepCircle state={s.state}>{s.state === 'done' ? '✓' : s.step}</StepCircle>
            {i < steps.length - 1 && <div className="step-line" />}
          </div>
          <div className="col gap8 grow">
            <div className="h3">
              {lang === 'EN' ? `Step ${s.step}` : `${s.step}단계`} · {t(s.title)}
            </div>
            <div className="txt">{t(s.desc)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
