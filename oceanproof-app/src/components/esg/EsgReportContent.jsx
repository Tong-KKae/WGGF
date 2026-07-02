import { StatRow } from '../ui/Stat';
import { Pill } from '../ui/Pill';
import { esgReport } from '../../data/mockData';
import { useT } from '../../i18n';

export function EsgReportContent({ showTitle = true }) {
  const t = useT();
  const trStats = esgReport.stats.map((s) => ({ ...s, label: t(s.label), value: t(s.value) }));

  return (
    <div className="col gap20">
      <div className="row between center wrap gap12">
        {showTitle ? (
          <div className="col gap4">
            <div className="h1">ESG Impact Report Preview</div>
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
        {esgReport.sections.map((s) => (
          <div className="col gap8" key={s.title}>
            <div className="h3">{t(s.title)}</div>
            <div className="wf-box pad16 txt">{t(s.body)}</div>
          </div>
        ))}
        <div className="h3">{t('4. 환경 임팩트 결과')}</div>
        <div className="wf-img" style={{ height: 140 }}>
          {t('분기별 임팩트 결과 차트')}
        </div>
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
