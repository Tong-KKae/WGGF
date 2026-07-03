import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { PriceCard } from '../../components/ui/PriceCard';
import { useApp } from '../../context/AppContext';
import { sponsorshipPlans } from '../../data/mockData';
import { useT } from '../../i18n';

export function SponsorshipPricingPage() {
  const navigate = useNavigate();
  const { sponsorship, updateSponsorship } = useApp();
  const t = useT();

  const handleSelect = (plan) => {
    if (plan.key === 'premium') {
      navigate('/inquiry');
      return;
    }
    updateSponsorship({ plan });
    navigate('/sponsorship/projects');
  };

  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" />
      <div className="pad32 col gap20">
        <div className="h1">{t('해양폰서십')}</div>
        <div className="txt">
          {t(
            '해양 복원 프로젝트를 후원하고, 검증된 환경 임팩트 데이터를 ESG 리포트와 브랜딩 자료로 활용할 수 있습니다.'
          )}
        </div>
        <div className="row gap16 wrap">
          {sponsorshipPlans.map((plan) => (
            <PriceCard
              key={plan.key}
              plan={plan}
              selected={sponsorship.plan?.key === plan.key}
              onSelect={handleSelect}
              ctaLabel={plan.key === 'premium' ? t('Premium 문의') : `${plan.label} ${t('선택')}`}
            />
          ))}
        </div>
        <div className="wf-fill pad16 txt center" style={{ textAlign: 'center' }}>
          {t('※ 스폰서십은 탄소 크레딧 판매가 아니라 검증 가능한 ESG 커뮤니케이션 데이터 제공 서비스입니다.')}
        </div>
      </div>
    </ScreenCard>
  );
}
