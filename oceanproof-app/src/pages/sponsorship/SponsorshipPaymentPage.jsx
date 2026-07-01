import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { LangToggle } from '../../components/ui/LangToggle';
import { FlowSteps } from '../../components/ui/FlowSteps';
import { PayCard } from '../../components/ui/PayCard';
import { CheckRow } from '../../components/ui/CheckRow';
import { useApp } from '../../context/AppContext';

const flowLabels = ['상품 선택', '프로젝트 선택', '신청 정보 입력', '결제/계약'];
const payOptions = [
  { key: '카드 결제', icon: '💳' },
  { key: '계좌이체', icon: '🏦' },
  { key: '계약서 검토 후 정산', icon: '📄' },
];

export function SponsorshipPaymentPage() {
  const navigate = useNavigate();
  const { sponsorship, updateSponsorship } = useApp();
  const [agree, setAgree] = useState({ terms: true, privacy: true, dataScope: true });

  const allAgreed = agree.terms && agree.privacy && agree.dataScope;

  const handleSubmit = () => {
    if (!allAgreed) {
      alert('약관에 모두 동의해주세요.');
      return;
    }
    navigate('/sponsorship/complete');
  };

  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" right={<LangToggle />} />
      <div className="pad32 col gap20" style={{ maxWidth: 760, margin: '0 auto' }}>
        <FlowSteps steps={flowLabels} current={4} />
        <div className="h2">결제 및 계약 방식 선택</div>

        <div className="wf-card pad24 col gap8">
          <div className="row between txt">
            <div>상품</div>
            <div>{sponsorship.plan?.label} Sponsorship</div>
          </div>
          <div className="row between txt">
            <div>프로젝트</div>
            <div>{sponsorship.project?.name}</div>
          </div>
          <div className="row between txt">
            <div>금액</div>
            <div>7,000,000원</div>
          </div>
          <div className="row between txt">
            <div>VAT</div>
            <div>700,000원</div>
          </div>
          <div className="divider2" />
          <div className="row between h3">
            <div>총 결제 금액</div>
            <div>7,700,000원</div>
          </div>
        </div>

        <div className="col gap8">
          <div className="label">결제 방식 선택</div>
          <div className="row gap12 wrap">
            {payOptions.map((p) => (
              <PayCard
                key={p.key}
                icon={p.icon}
                label={p.key}
                selected={sponsorship.payment === p.key}
                onClick={() => updateSponsorship({ payment: p.key })}
              />
            ))}
          </div>
        </div>

        <div className="wf-fill pad16 txt">
          세금계산서 발행 정보: GREENERS 주식회사 / 사업자번호 123-45-67890 / billing@greeners.co.kr
        </div>

        <div className="col gap8">
          <CheckRow checked={agree.terms} label="서비스 이용약관 동의" onToggle={() => setAgree((a) => ({ ...a, terms: !a.terms }))} />
          <CheckRow
            checked={agree.privacy}
            label="개인정보 처리방침 동의"
            onToggle={() => setAgree((a) => ({ ...a, privacy: !a.privacy }))}
          />
          <CheckRow
            checked={agree.dataScope}
            label="ESG 데이터 활용 범위 확인"
            onToggle={() => setAgree((a) => ({ ...a, dataScope: !a.dataScope }))}
          />
        </div>

        <div className="row gap8 wrap">
          <button type="button" className="wf-btn accent grow" style={{ textAlign: 'center' }} onClick={handleSubmit}>
            결제 요청 완료
          </button>
          <button type="button" className="wf-btn grow" style={{ textAlign: 'center' }} onClick={handleSubmit}>
            계약 검토 요청하기
          </button>
        </div>
      </div>
    </ScreenCard>
  );
}
