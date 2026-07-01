import { useNavigate } from 'react-router-dom';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { StepCircle } from '../../components/ui/StepCircle';
import { Pill } from '../../components/ui/Pill';
import { useApp } from '../../context/AppContext';

export function SponsorshipCompletePage() {
  const navigate = useNavigate();
  const { sponsorship } = useApp();

  return (
    <ScreenCard>
      <div
        className="pad32 col gap24 center"
        style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', minHeight: 560, justifyContent: 'center' }}
      >
        <StepCircle state="active" large>
          ✓
        </StepCircle>
        <div className="h1">스폰서십 신청이 완료되었습니다</div>
        <div className="txt">관리자 검토 후 계약 및 프로젝트 온보딩 절차가 진행됩니다.</div>

        <div className="wf-card pad24 col gap8" style={{ width: '100%', textAlign: 'left' }}>
          <div className="row between txt">
            <div>신청번호</div>
            <div>
              <b>SP-2026-0630-021</b>
            </div>
          </div>
          <div className="row between txt">
            <div>기업명</div>
            <div>
              <b>{sponsorship.applicant?.company || 'GREENERS 주식회사'}</b>
            </div>
          </div>
          <div className="row between txt">
            <div>선택 상품</div>
            <div>
              <b>{sponsorship.plan?.label}</b>
            </div>
          </div>
          <div className="row between txt">
            <div>선택 프로젝트</div>
            <div>
              <b>{sponsorship.project?.name}</b>
            </div>
          </div>
          <div className="row between txt">
            <div>결제/계약 방식</div>
            <div>
              <b>{sponsorship.payment}</b>
            </div>
          </div>
          <div className="row between txt">
            <div>상태</div>
            <Pill>관리자 검토 대기</Pill>
          </div>
        </div>

        <div className="wf-fill pad16 col gap8" style={{ width: '100%', textAlign: 'left' }}>
          <div className="label">다음 단계 안내</div>
          <div className="txt">
            1. 관리자 신청 검토
            <br />
            2. 계약/결제 확인
            <br />
            3. 프로젝트 스폰서 등록
            <br />
            4. ESG 대시보드 활성화
          </div>
        </div>

        <div className="row gap8">
          <button type="button" className="wf-btn" onClick={() => navigate('/business')}>
            기업 대시보드로 이동
          </button>
          <button type="button" className="wf-btn accent" onClick={() => navigate('/sponsorship/report')}>
            ESG 리포트 샘플 보기
          </button>
        </div>
      </div>
    </ScreenCard>
  );
}
