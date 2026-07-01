import { useNavigate } from 'react-router-dom';
import { ScreenCard } from '../components/ui/ScreenCard';
import { StepCircle } from '../components/ui/StepCircle';
import { BadgeCircle } from '../components/ui/Badge';
import { myBadges } from '../data/mockData';

export function JoinCompletePage() {
  const navigate = useNavigate();
  return (
    <ScreenCard>
      <div
        className="pad32 col gap24 center"
        style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', minHeight: 480, justifyContent: 'center' }}
      >
        <div className="label">SC-07 · 보상 및 인증</div>
        <StepCircle state="active" large>
          ✓
        </StepCircle>
        <div className="h1">활동 기록이 제출되었습니다!</div>
        <div className="txt">검증 절차(위성·드론·GIS) 완료 후 인증서가 발급됩니다. 약 3~5일 소요</div>
        <div className="row gap16 wrap" style={{ justifyContent: 'center' }}>
          {myBadges.slice(0, 3).map((b) => (
            <BadgeCircle key={b.key} icon={b.icon} label={b.label} earned={b.key === 'seagrass'} />
          ))}
        </div>
        <div className="wf-fill pad16" style={{ width: '100%' }}>
          누적 활동 포인트: <b>120P</b> · 파트너 혜택과 연계됩니다
        </div>
        <div className="row gap8">
          <button type="button" className="wf-btn" onClick={() => navigate('/mypage')}>
            마이페이지로 이동
          </button>
          <button type="button" className="wf-btn accent" onClick={() => navigate('/projects')}>
            다른 프로젝트 참여하기
          </button>
        </div>
      </div>
    </ScreenCard>
  );
}
