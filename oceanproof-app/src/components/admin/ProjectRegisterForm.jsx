import { useState } from 'react';
import { Pill } from '../ui/Pill';
import { ProgressBar } from '../ui/ProgressBar';

const projectTypes = ['잘피 식재', '해양 쓰레기 수거', '갯벌 모니터링', '기타'];

export function ProjectRegisterForm() {
  const [name, setName] = useState('');
  const [type, setType] = useState('잘피 식재');
  const [visibility, setVisibility] = useState('공개');
  const [approval, setApproval] = useState('자동 승인');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`데모: "${name || '신규 프로젝트'}" 프로젝트가 등록되었습니다.`);
  };

  return (
    <div className="col gap20">
      <div className="h2">신규 프로젝트 등록</div>
      <form className="row gap24 split-mobile" onSubmit={handleSubmit}>
        <div className="col gap16 grow">
          <input className="wf-input" placeholder="프로젝트명" value={name} onChange={(e) => setName(e.target.value)} />
          <div className="col gap8">
            <div className="label">프로젝트 유형</div>
            <div className="row gap8 wrap">
              {projectTypes.map((t) => (
                <button
                  type="button"
                  key={t}
                  className={`pill choice ${type === t ? 'selected' : ''}`}
                  onClick={() => setType(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <input className="wf-input" placeholder="지역" />
          <div className="wf-map" style={{ height: 180 }}>
            지도에서 생태 구역 지정 (클릭/드래그)
          </div>
          <div className="row gap16 wrap">
            <input className="wf-input grow" placeholder="모집 시작일" type="date" />
            <input className="wf-input grow" placeholder="모집 종료일" type="date" />
          </div>
          <input className="wf-input" placeholder="프로젝트 진행 기간" />
          <div className="row gap16 wrap">
            <input className="wf-input grow" placeholder="목표 복원 면적 (ha)" />
            <input className="wf-input grow" placeholder="목표 참여자 수 (명)" />
          </div>
          <input className="wf-input" placeholder="예상 탄소 격리량 (tCO₂/년)" />
          <div className="wf-img" style={{ height: 100 }}>
            🖼 대표 이미지 업로드
          </div>
          <textarea className="wf-input" placeholder="프로젝트 설명" />
          <div className="row gap24 wrap">
            <div className="col gap8">
              <div className="label">공개 여부</div>
              <div className="row gap8">
                {['공개', '비공개'].map((v) => (
                  <button
                    type="button"
                    key={v}
                    className={`pill choice ${visibility === v ? 'selected' : ''}`}
                    onClick={() => setVisibility(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="col gap8">
              <div className="label">참여 승인 방식</div>
              <div className="row gap8">
                {['자동 승인', '관리자 승인'].map((v) => (
                  <button
                    type="button"
                    key={v}
                    className={`pill choice ${approval === v ? 'selected' : ''}`}
                    onClick={() => setApproval(v)}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button type="submit" className="wf-btn accent" style={{ width: 'fit-content' }}>
            프로젝트 등록하기
          </button>
        </div>

        <div className="side-panel col gap8" style={{ padding: 24 }}>
          <div className="label">미리보기</div>
          <div className="wf-card">
            <div className="wf-img" style={{ height: 120 }}>
              대표 이미지
            </div>
            <div className="pad16 col gap8">
              <div className="row between">
                <div className="h3">{name || '신규 프로젝트명'}</div>
                <Pill accent>모집중</Pill>
              </div>
              <div className="txt">참여자 0명 · 진행률 0%</div>
              <ProgressBar percent={0} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
