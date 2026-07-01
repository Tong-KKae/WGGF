import { useNavigate, useParams } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Pill } from '../components/ui/Pill';
import { StatRow } from '../components/ui/Stat';
import { projects } from '../data/mockData';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id) ?? projects[0];

  return (
    <ScreenCard>
      <SiteHeader backTo="/projects" backLabel="← 프로젝트 목록" />
      <div className="row split-mobile" style={{ minHeight: 480 }}>
        <div className="col grow pad32 gap16">
          <Pill accent>{project.status}</Pill>
          <div className="h1">{project.name}</div>
          <div className="txt">{project.description}</div>
          <div className="wf-map" style={{ height: 220 }}>
            지정 생태 구역 지도 (Leaflet.js)
          </div>
          <StatRow stats={project.stats} />
          <div className="h3">스폰서 기업</div>
          <div className="row gap8 wrap">
            {project.sponsors.map((s) => (
              <div key={s} className="wf-fill pad16 grow center small">
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="side-panel col" style={{ padding: 32 }}>
          <div className="h3" style={{ marginBottom: 12 }}>
            참여 방법
          </div>
          <div className="txt" style={{ marginBottom: 16 }}>
            현장 QR코드를 스캔하거나 아래 버튼으로 참여하세요
          </div>
          <button
            type="button"
            className="wf-btn accent"
            style={{ textAlign: 'center', marginBottom: 12 }}
            onClick={() => navigate('/join')}
          >
            지금 참여하기
          </button>
          <div className="divider2" style={{ margin: '12px 0' }} />
          <div className="small">
            상태: {project.status} ({project.period})
            <br />
            승인 방식: {project.approval}
          </div>
        </div>
      </div>
    </ScreenCard>
  );
}
