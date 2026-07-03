import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Landmark, FileText } from 'lucide-react';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { FlowSteps } from '../../components/ui/FlowSteps';
import { PayCard } from '../../components/ui/PayCard';
import { CheckRow } from '../../components/ui/CheckRow';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n';

const flowLabels = ['상품 선택', '프로젝트 선택', '신청 정보 입력', '결제/계약'];
const payOptions = [
  { key: '카드 결제', icon: CreditCard },
  { key: '계좌이체', icon: Landmark },
  { key: '계약서 검토 후 정산', icon: FileText },
];

export function SponsorshipPaymentPage() {
  const navigate = useNavigate();
  const { sponsorship, updateSponsorship } = useApp();
  const [agree, setAgree] = useState({ terms: true, privacy: true, dataScope: true });
  const t = useT();

  const allAgreed = agree.terms && agree.privacy && agree.dataScope;

  const handleSubmit = () => {
    if (!allAgreed) {
      alert(t('약관에 모두 동의해주세요.'));
      return;
    }
    navigate('/sponsorship/complete');
  };

  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" />
      <div className="pad32 col gap20" style={{ maxWidth: 760, margin: '0 auto' }}>
        <FlowSteps steps={flowLabels.map(t)} current={4} />
        <div className="h2">{t('결제 및 계약 방식 선택')}</div>

        <div className="wf-card pad24 col gap8">
          <div className="row between txt">
            <div>{t('상품')}</div>
            <div>{sponsorship.plan?.label} Sponsorship</div>
          </div>
          <div className="row between txt">
            <div>{t('프로젝트')}</div>
            <div>{t(sponsorship.project?.name)}</div>
          </div>
          <div className="row between txt">
            <div>{t('금액')}</div>
            <div>{t('7,000,000원')}</div>
          </div>
          <div className="row between txt">
            <div>VAT</div>
            <div>{t('700,000원')}</div>
          </div>
          <div className="divider2" />
          <div className="row between h3">
            <div>{t('총 결제 금액')}</div>
            <div>{t('7,700,000원')}</div>
          </div>
        </div>

        <div className="col gap8">
          <div className="label">{t('결제 방식 선택')}</div>
          <div className="row gap12 wrap">
            {payOptions.map((p) => (
              <PayCard
                key={p.key}
                icon={p.icon}
                label={t(p.key)}
                selected={sponsorship.payment === p.key}
                onClick={() => updateSponsorship({ payment: p.key })}
              />
            ))}
          </div>
        </div>

        <div className="wf-fill pad16 txt">
          {t('세금계산서 발행 정보: GREENERS 주식회사 / 사업자번호 123-45-67890 / billing@greeners.co.kr')}
        </div>

        <div className="col gap8">
          <CheckRow
            checked={agree.terms}
            label={t('서비스 이용약관 동의')}
            onToggle={() => setAgree((a) => ({ ...a, terms: !a.terms }))}
          />
          <CheckRow
            checked={agree.privacy}
            label={t('개인정보 처리방침 동의')}
            onToggle={() => setAgree((a) => ({ ...a, privacy: !a.privacy }))}
          />
          <CheckRow
            checked={agree.dataScope}
            label={t('ESG 데이터 활용 범위 확인')}
            onToggle={() => setAgree((a) => ({ ...a, dataScope: !a.dataScope }))}
          />
        </div>

        <div className="row gap8 wrap">
          <button type="button" className="wf-btn accent grow" style={{ textAlign: 'center' }} onClick={handleSubmit}>
            {t('결제 요청 완료')}
          </button>
          <button type="button" className="wf-btn grow" style={{ textAlign: 'center' }} onClick={handleSubmit}>
            {t('계약 검토 요청하기')}
          </button>
        </div>
      </div>
    </ScreenCard>
  );
}
