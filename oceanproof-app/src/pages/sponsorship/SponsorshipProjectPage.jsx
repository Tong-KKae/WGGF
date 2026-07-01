import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { LangToggle } from '../../components/ui/LangToggle';
import { FlowSteps } from '../../components/ui/FlowSteps';
import { ProjectCard } from '../../components/ui/ProjectCard';
import { useApp } from '../../context/AppContext';
import { projects } from '../../data/mockData';

const flowLabels = ['상품 선택', '프로젝트 선택', '신청 정보 입력', '결제/계약'];
const activityFilters = ['전체 활동', '잘피 식재', '해양 쓰레기 수거', '갯벌 모니터링'];
const statusFilters = ['모집중', '진행중'];

export function SponsorshipProjectPage() {
  const navigate = useNavigate();
  const { sponsorship, updateSponsorship } = useApp();
  const [activityFilter, setActivityFilter] = useState('전체 활동');
  const [statusFilter, setStatusFilter] = useState('모집중');
  const picked = sponsorship.project ?? projects[0];

  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" right={<LangToggle />} />
      <div className="pad32 col gap20">
        <FlowSteps steps={flowLabels} current={2} />

        <div className="h2">후원할 프로젝트를 선택하세요</div>
        <div className="row gap8 wrap">
          <select className="wf-input" style={{ width: 160 }}>
            <option>지역 선택</option>
            <option>경남 고성</option>
            <option>부산</option>
            <option>여수</option>
          </select>
          {activityFilters.map((f) => (
            <button
              type="button"
              key={f}
              className={`pill choice ${activityFilter === f ? 'selected' : ''}`}
              onClick={() => setActivityFilter(f)}
            >
              {f}
            </button>
          ))}
          <div style={{ marginLeft: 'auto' }} />
          {statusFilters.map((f) => (
            <button
              type="button"
              key={f}
              className={`pill choice ${statusFilter === f ? 'selected' : ''}`}
              onClick={() => setStatusFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="row gap16 wrap">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              selected={picked.id === p.id}
              selectLabel="선택"
              onClick={() => updateSponsorship({ project: p })}
            />
          ))}
        </div>

        <div className="wf-fill pad24 col gap8">
          <div className="label">선택된 프로젝트</div>
          <div className="h3">{picked.name}</div>
          <div className="txt">예상 제공 데이터: 탄소 격리량, 복원 면적, 참여 시민 수, ESG 리포트</div>
          <button
            type="button"
            className="wf-btn accent"
            style={{ width: 'fit-content' }}
            onClick={() => navigate('/sponsorship/apply')}
          >
            신청 정보 입력하기
          </button>
        </div>
      </div>
    </ScreenCard>
  );
}
