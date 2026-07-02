import { useNavigate } from 'react-router-dom';
import { Pill } from './Pill';
import { ProgressBar } from './ProgressBar';
import { useT } from '../../i18n';

export function ProjectCard({ project, onClick, selected, selectLabel }) {
  const navigate = useNavigate();
  const t = useT();
  const handleClick = onClick ?? (() => navigate(`/projects/${project.id}`));
  return (
    <div
      className="wf-card clickable"
      style={{ outline: selected ? '2px solid var(--ink)' : 'none' }}
      onClick={selectLabel ? undefined : handleClick}
    >
      <div className="wf-img" style={{ height: 140, overflow: 'hidden', padding: 0 }}>
        {project.image ? (
          <img
            src={project.image}
            alt={t(project.name)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          t('프로젝트 대표 이미지')
        )}
      </div>
      <div className="pad16 col gap8">
        <div className="row between">
          <div className="h3">{t(project.name)}</div>
          <Pill accent={project.statusVariant === 'accent'}>{t(project.status)}</Pill>
        </div>
        <div className="txt">
          {t('참여자')} {project.participants}{t('명')} · {t('진행률')} {project.progress}%
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
