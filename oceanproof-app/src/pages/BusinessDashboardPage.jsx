import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Sidebar } from '../components/ui/Sidebar';
import { Pill } from '../components/ui/Pill';
import { StatRow } from '../components/ui/Stat';
import { PriceCard } from '../components/ui/PriceCard';
import { EsgReportContent } from '../components/esg/EsgReportContent';
import { useApp } from '../context/AppContext';
import { businessUser, sponsorshipPlans } from '../data/mockData';
import { useT } from '../i18n';

const tabs = [
  { key: 'dashboard', label: '대시보드' },
  { key: 'sponsor', label: '스폰서 프로젝트' },
  { key: 'report', label: 'ESG 리포트' },
  { key: 'branding', label: '브랜딩 자료', soon: true },
  { key: 'settings', label: '계정 설정', soon: true },
];

export function BusinessDashboardPage() {
  const [tab, setTab] = useState('dashboard');
  const navigate = useNavigate();
  const { updateSponsorship } = useApp();
  const t = useT();
  const trStats = businessUser.stats.map((s) => ({ ...s, label: t(s.label), value: t(s.value) }));

  const handlePlanSelect = (plan) => {
    if (plan.key === 'premium') {
      navigate('/inquiry');
      return;
    }
    updateSponsorship({ plan });
    navigate('/sponsorship/projects');
  };

  return (
    <ScreenCard>
      <SiteHeader
        suffix=" · BUSINESS"
        right={
          <>
            <Pill>{t(businessUser.company)}</Pill>
            <button type="button" className="wf-btn" onClick={() => navigate('/')}>
              {t('로그아웃')}
            </button>
          </>
        }
      />
      <div className="row split-mobile" style={{ minHeight: 640 }}>
        <Sidebar tabs={tabs.map((tb) => ({ ...tb, label: t(tb.label) }))} active={tab} onChange={setTab} />
        <div className="grow pad32 col gap24">
          {tab === 'dashboard' && (
            <>
              <div className="row between center wrap gap12">
                <div className="h2">
                  {t(businessUser.quarter)} {t('ESG 성과')}
                </div>
                <button type="button" className="wf-btn accent" onClick={() => setTab('report')}>
                  📄 {t('PDF 리포트 다운로드')}
                </button>
              </div>
              <StatRow stats={trStats} />
              <div className="row gap16 wrap">
                <div className="wf-img grow" style={{ height: 160 }}>
                  {t('월별 탄소 격리량 추이 (차트)')}
                </div>
                <div className="wf-img grow" style={{ height: 160 }}>
                  {t('스폰서 프로젝트별 기여도 (차트)')}
                </div>
              </div>
              <div className="row gap16 wrap">
                <div className="wf-fill pad16 grow txt">
                  {t('Scope 3 탄소 감축 기여 데이터:')} <b>3.6 tCO₂</b> {t('반영 가능')}
                </div>
                <div className="wf-fill pad16 grow txt">
                  {t('브랜딩 캠페인용 인증 뱃지·로고')}{' '}
                  <span
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => alert(t('데모: 브랜딩 자료를 다운로드합니다.'))}
                  >
                    {t('다운로드')}
                  </span>
                </div>
              </div>
            </>
          )}

          {tab === 'sponsor' && (
            <div className="col gap20">
              <div className="h2">{t('해양 복원 프로젝트 스폰서십')}</div>
              <div className="txt">
                {t(
                  '기업은 해양 복원 프로젝트를 후원하고, 검증된 환경 임팩트 데이터를 ESG 리포트와 브랜딩 자료로 활용할 수 있습니다.'
                )}
              </div>
              <div className="row gap16 wrap">
                {sponsorshipPlans.map((plan) => (
                  <PriceCard
                    key={plan.key}
                    plan={plan}
                    onSelect={handlePlanSelect}
                    ctaLabel={
                      plan.key === 'premium'
                        ? t('Premium 문의')
                        : plan.key === 'standard'
                        ? t('Standard 선택 (현재 이용중)')
                        : `${plan.label} ${t('선택')}`
                    }
                  />
                ))}
              </div>
              <div className="wf-fill pad16 txt center" style={{ textAlign: 'center' }}>
                {t('※ 스폰서십은 탄소 크레딧 판매가 아니라 검증 가능한 ESG 커뮤니케이션 데이터 제공 서비스입니다.')}
              </div>
            </div>
          )}

          {tab === 'report' && <EsgReportContent />}
        </div>
      </div>
    </ScreenCard>
  );
}
