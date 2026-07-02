import { useState } from 'react';
import { Pill } from '../ui/Pill';
import { ProgressBar } from '../ui/ProgressBar';
import { useT } from '../../i18n';

const projectTypes = ['잘피 식재', '해양 쓰레기 수거', '갯벌 모니터링', '기타'];

export function ProjectRegisterForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('잘피 식재');
  const [visibility, setVisibility] = useState('공개');
  const [approval, setApproval] = useState('자동 승인');
  const t = useT();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('데모: "{name}" 프로젝트가 등록되었습니다.').replace('{name}', name || t('신규 프로젝트')));
  };

  return (
    <div className="col gap20">
      <div className="h2">{t('신규 프로젝트 등록')}</div>
      <form className="row gap24 split-mobile" onSubmit={handleSubmit}>
        <div className="col gap16 grow">
          <input
            className="wf-input"
            placeholder={t('프로젝트명')}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="col gap8">
            <div className="label">{t('프로젝트 유형')}</div>
            <div className="row gap8 wrap">
              {projectTypes.map((pt) => (
                <button
                  type="button"
                  key={pt}
                  className={`pill choice ${type === pt ? 'selected' : ''}`}
                  onClick={() => setType(pt)}
                >
                  {t(pt)}
                </button>
              ))}
            </div>
          </div>
          <input className="wf-input" placeholder={t('지역')} />
          <div className="wf-map" style={{ height: 180 }}>
            {t('지도에서 생태 구역 지정 (클릭/드래그)')}
          </div>
          <div className="row gap16 wrap">
            <input className="wf-input grow" placeholder={t('모집 시작일')} type="date" />
            <input className="wf-input grow" placeholder={t('모집 종료일')} type="date" />
          </div>
          <input className="wf-input" placeholder={t('프로젝트 진행 기간')} />
          <div className="row gap16 wrap">
            <input className="wf-input grow" placeholder={t('목표 복원 면적 (ha)')} />
            <input className="wf-input grow" placeholder={t('목표 참여자 수 (명)')} />
          </div>
          <input className="wf-input" placeholder={t('예상 탄소 격리량 (tCO₂/년)')} />
          <div className="wf-img" style={{ height: 100 }}>
            🖼 {t('대표 이미지 업로드')}
          </div>
          <textarea className="wf-input" placeholder={t('프로젝트 설명')} />
          <div className="row gap24 wrap">
            <div className="col gap8">
              <div className="label">{t('공개 여부')}</div>
              <div className="row gap8">
                {['공개', '비공개'].map((v) => (
                  <button
                    type="button"
                    key={v}
                    className={`pill choice ${visibility === v ? 'selected' : ''}`}
                    onClick={() => setVisibility(v)}
                  >
                    {t(v)}
                  </button>
                ))}
              </div>
            </div>
            <div className="col gap8">
              <div className="label">{t('참여 승인 방식')}</div>
              <div className="row gap8">
                {['자동 승인', '관리자 승인'].map((v) => (
                  <button
                    type="button"
                    key={v}
                    className={`pill choice ${approval === v ? 'selected' : ''}`}
                    onClick={() => setApproval(v)}
                  >
                    {t(v)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="wf-btn accent" style={{ width: 'fit-content' }}>
            {t('프로젝트 등록하기')}
          </button>
        </div>

        <div className="side-panel col gap8" style={{ padding: 24 }}>
          <div className="label">{t('미리보기')}</div>
          <div className="wf-card">
            <div className="wf-img" style={{ height: 120 }}>
              {t('대표 이미지')}
            </div>
            <div className="pad16 col gap8">
              <div className="row between">
                <div className="h3">{name || t('신규 프로젝트명')}</div>
                <Pill accent>{t('모집중')}</Pill>
              </div>
              <div className="txt">
                {t('참여자')} 0{t('명')} · {t('진행률')} 0%
              </div>
              <ProgressBar percent={0} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
