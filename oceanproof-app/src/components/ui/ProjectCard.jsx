import { useNavigate } from 'react-router-dom';
import { Pill } from './Pill';
import { ProgressBar } from './ProgressBar';

export function ProjectCard({ project, onClick, selected, selectLabel }) {
  const navigate = useNavigate();
  const handleClick = onClick ?? (() => navigate(`/projects/${project.id}`));
  return (
    <div
      className="wf-card clickable grow"
      style={{ minWidth: 280, outline: selected ? '2px solid var(--ink)' : 'none' }}
      onClick={selectLabel ? undefined : handleClick}
    >
      <div className="wf-img" style={{ height: 140 }}>
        프로젝트 대표 이미지
      </div>
      <div className="pad16 col gap8">
        <div className="row between">
          <div className="h3">{project.name}</div>
          <Pill accent={project.statusVariant === 'accent'}>{project.status}</Pill>
        </div>
        <div className="txt">
          참여자 {project.participants}명 · 진행률 {project.progress}%
        </div>
        <ProgressBar percent={project.progress} />
        {selectLabel && (
          <button type="button" className="wf-btn solid" style={{ textAlign: 'center' }} onClick={handleClick}>
            {selectLabel}
          </button>
        )}
      </div>
    </div>
  );
}
