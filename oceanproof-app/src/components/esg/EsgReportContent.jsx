import { StatRow } from '../ui/Stat';
import { Pill } from '../ui/Pill';
import { esgReport } from '../../data/mockData';
import { useT } from '../../i18n';

const quarterlyImpact = [
  { label: '1분기', value: 42 },
  { label: '2분기', value: 58 },
  { label: '3분기', value: 71 },
  { label: '4분기', value: 88 },
];

export function EsgReportContent({ showTitle = true }) {
  const t = useT();
  const trStats = esgReport.stats.map((s) => ({ ...s, label: t(s.label), value: t(s.value) }));

  return (
    <div className="col gap20">
      <div className="row between center wrap gap12">
        {showTitle ? (
          <div className="col gap4">
            <div className="h1">{t('ESG 임팩트 리포트 미리보기')}</div>
            <div className="txt">
              {t('기간')}: {esgReport.period}
            </div>
          </div>
        ) : (
          <div />
        )}
        <div className="row gap8">
          <button type="button" className="wf-btn accent" onClick={() => alert(t('데모: PDF 리포트를 다운로드합니다.'))}>
            {t('PDF 다운로드')}
          </button>
          <button type="button" className="wf-btn" onClick={() => alert(t('데모: 브랜딩 자료를 다운로드합니다.'))}>
            {t('브랜딩 자료 다운로드')}
          </button>
        </div>
      </div>

      <StatRow stats={trStats} />

      <div className="wf-card pad24 col gap16">
        {esgReport.sections.slice(0, 3).map((s) => (
          <div className="col gap8" key={s.title}>
            <div className="h3">{t(s.title)}</div>
            <div className="wf-box pad16 txt">{t(s.body)}</div>
          </div>
        ))}
        <div className="h3">{t('4. 분기별 환경 임팩트 결과')}</div>
        <div className="col gap4">
          <div className="chart-grid" style={{ height: 140 }}>
            {quarterlyImpact.map((q) => (
              <div key={q.label} className="chart-bar" style={{ height: `${q.value}%`, marginBottom:15  }}>
                <span>{t(q.label)}</span>
              </div>
            ))}
          </div>
        </div>
        {esgReport.sections.slice(3).map((s) => (
          <div className="col gap8" key={s.title}>
            <div className="h3">{t(s.title)}</div>
            <div className="wf-box pad16 txt">{t(s.body)}</div>
          </div>
        ))}
      </div>

      <div className="row gap8 wrap">
        {esgReport.badges.map((b) => (
          <Pill key={b} accent>
            {b}
          </Pill>
        ))}
      </div>
    </div>
  );
}
