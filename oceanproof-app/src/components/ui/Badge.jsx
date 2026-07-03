import { useT } from '../../i18n';

export function BadgeCircle({ icon: Icon, label, earned = true }) {
  const t = useT();
  return (
    <div className="col center gap8">
      <div className={`badge-box ${earned ? '' : 'locked'}`}>
        <Icon size={24} strokeWidth={2} />
      </div>
      <div className="small">
        {label}
        <br />({earned ? t('획득') : t('미획득')})
      </div>
    </div>
  );
}
