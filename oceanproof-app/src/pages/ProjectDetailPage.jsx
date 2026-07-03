import { useNavigate, useParams } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Pill } from '../components/ui/Pill';
import { StatRow } from '../components/ui/Stat';
import { FakeMap } from '../components/ui/FakeMap';
import { projects, projectMapMarkers } from '../data/mockData';
import { useT } from '../i18n';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id) ?? projects[0];
  const t = useT();
  const trStats = project.stats.map((s) => ({ ...s, label: t(s.label), value: t(s.value) }));
  const ownMarker = projectMapMarkers.filter((m) => m.id === project.id);

  return (
    <ScreenCard>
      <SiteHeader />
      <div className="row split-mobile" style={{ minHeight: 480 }}>
        <div className="col grow pad32 gap16">
          <div className="wf-img" style={{ height: 240, overflow: 'hidden', padding: 0 }}>
            <img
              src={project.image}
              alt={t(project.name)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <Pill accent>{t(project.status)}</Pill>
          <div className="h1">{t(project.name)}</div>
          <div className="txt">{t(project.description)}</div>
          <StatRow stats={trStats} />
          <div className="h3">{t('위치')}</div>
          <FakeMap markers={ownMarker} onSelect={() => {}} height={220} />
          <div className="h3">{t('스폰서 기업')}</div>
          <div className="row gap12 wrap">
            {project.sponsors.map((s) => (
              <div key={s.name} className="sponsor-chip">
                <span className="sponsor-avatar" style={{ background: s.color }}>
                  {s.name[0]}
                </span>
                <span className="txt" style={{ fontWeight: 700, color: 'var(--ink)' }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="side-panel col" style={{ padding: 32 , marginTop:32, marginRight: 20}}>
          <div className="h3" style={{ marginBottom: 12 }}>
            {t('참여 방법')}
          </div>
          <div className="txt" style={{ marginBottom: 16 }}>
            {t('현장 QR코드를 스캔하거나 아래 버튼으로 참여하세요')}
          </div>
          <button
            type="button"
            className="wf-btn accent"
            style={{ textAlign: 'center', marginTop: 12 }}
            onClick={() => navigate('/join')}
          >
            {t('지금 참여하기')}
          </button>

        </div>
      </div>
    </ScreenCard>
  );
}
