import { useT } from '../../i18n';

export function Sidebar({ tabs, active, onChange, extra }) {
  const t = useT();
  return (
    <div className="sidebar col">
      {tabs.map((tab) =>
        tab.soon ? (
          <div className="item soon" key={tab.key}>
            {tab.label}
            <span className="soon-tag">{t('준비중')}</span>
          </div>
        ) : (
          <button
            type="button"
            key={tab.key}
            className={`item ${active === tab.key ? 'active' : ''}`}
            onClick={() => onChange(tab.key)}
          >
            {tab.label}
          </button>
        )
      )}
      {extra}
    </div>
  );
}
