import { useNavigate } from 'react-router-dom';
import { ScreenCard } from '../components/ui/ScreenCard';
import { StepCircle } from '../components/ui/StepCircle';
import { Pill } from '../components/ui/Pill';
import { useApp } from '../context/AppContext';

export function InquiryCompletePage() {
  const navigate = useNavigate();
  const { inquiry } = useApp();

  return (
    <ScreenCard>
      <div
        className="pad32 col gap24 center"
        style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center', minHeight: 460, justifyContent: 'center' }}
      >
        <StepCircle state="active" large>
          ✓
        </StepCircle>
        <div className="h1">문의가 접수되었습니다</div>
        <div className="txt">담당자가 입력하신 연락처로 2~3영업일 이내에 연락드립니다.</div>
        <div className="wf-card pad24 col gap8" style={{ width: '100%', textAlign: 'left' }}>
          <div className="row between">
            <div className="txt">기관명</div>
            <div className="h3">{inquiry?.org || 'GREENERS 주식회사'}</div>
          </div>
          <div className="row between">
            <div className="txt">관심 서비스</div>
            <div className="h3">{inquiry?.interest?.[0] || 'ESG 리포트'}</div>
          </div>
          <div className="row between">
            <div className="txt">예상 예산</div>
            <div className="h3">{inquiry?.budget || '500~1000만원'}</div>
          </div>
          <div className="row between">
            <div className="txt">접수 상태</div>
            <Pill>검토 대기</Pill>
          </div>
        </div>
        <div className="row gap8">
          <button type="button" className="wf-btn" onClick={() => navigate('/')}>
            메인으로 돌아가기
          </button>
          <button type="button" className="wf-btn accent" onClick={() => navigate('/sponsorship')}>
            스폰서십 상품 보기
          </button>
        </div>
      </div>
    </ScreenCard>
  );
}
