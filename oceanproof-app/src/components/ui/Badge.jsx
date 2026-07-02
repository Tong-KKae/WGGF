import { useT } from '../../i18n';

export function BadgeCircle({ icon, label, earned = true }) {
  const t = useT();
  return (
    <div className="col center gap8">
      <div className={`badge-box ${earned ? '' : 'locked'}`}>{icon}</div>
      <div className="small">
        {label}
        <br />({earned ? t('획득') : t('미획득')})
      </div>
    </div>
  );
}
