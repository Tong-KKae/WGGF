import { useNavigate, useParams } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Pill } from '../components/ui/Pill';
import { StatRow } from '../components/ui/Stat';
import { projects } from '../data/mockData';
import { useT } from '../i18n';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id) ?? projects[0];
  const t = useT();
  const trStats = project.stats.map((s) => ({ ...s, label: t(s.label), value: t(s.value) }));

  return (
    <ScreenCard>
      <SiteHeader />
      <div className="row split-mobile" style={{ minHeight: 480 }}>
        <div className="col grow pad32 gap16">
          <Pill accent>{t(project.status)}</Pill>
          <div className="h1">{t(project.name)}</div>
          <div className="txt">{t(project.description)}</div>
          <div className="wf-map" style={{ height: 220 }}>
            {t('지정 생태 구역 지도 (Leaflet.js)')}
          </div>
          <StatRow stats={trStats} />
          <div className="h3">{t('스폰서 기업')}</div>
          <div className="row gap8 wrap">
            {project.sponsors.map((s) => (
              <div key={s} className="wf-fill pad16 grow center small">
                {t(s)}
              </div>
            ))}
          </div>
        </div>
        <div className="side-panel col" style={{ padding: 32 }}>
          <div className="h3" style={{ marginBottom: 12 }}>
            {t('참여 방법')}
          </div>
          <div className="txt" style={{ marginBottom: 16 }}>
            {t('현장 QR코드를 스캔하거나 아래 버튼으로 참여하세요')}
          </div>
          <button
            type="button"
            className="wf-btn accent"
            style={{ textAlign: 'center', marginBottom: 12 }}
            onClick={() => navigate('/join')}
          >
            {t('지금 참여하기')}
          </button>
          <div className="divider2" style={{ margin: '12px 0' }} />
          <div className="small">
            {t('상태')}: {t(project.status)} ({project.period})
            <br />
            {t('승인 방식')}: {t(project.approval)}
          </div>
        </div>
      </div>
    </ScreenCard>
  );
}
