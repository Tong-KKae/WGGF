import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Leaf, BadgeCheck, Download } from 'lucide-react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Sidebar } from '../components/ui/Sidebar';
import { Pill } from '../components/ui/Pill';
import { StatRow } from '../components/ui/Stat';
import { PriceCard } from '../components/ui/PriceCard';
import { TrendLineChart } from '../components/ui/TrendLineChart';
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

const monthlyTrend = [
  { label: '4월', value: 36 },
  { label: '5월', value: 52 },
  { label: '6월', value: 66 },
  { label: '7월', value: 74 },
  { label: '8월', value: 62 },
];

const sponsorContribution = [
  { label: 'A', value: 72 },
  { label: 'B', value: 58 },
  { label: 'C', value: 44 },
  { label: 'D', value: 30 },
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
              <div className="row between center wrap gap16">
                <div className="col gap6">
                  <div className="h2">
                    {t(businessUser.quarter)} {t('ESG 성과')}
                  </div>
                  <div className="txt">2026년 2분기 ESG 성과 보고서</div>
                </div>
                <button type="button" className="wf-btn accent" onClick={() => setTab('report')}>
                  <FileText size={15} strokeWidth={2.2} />
                  {t('PDF 리포트 다운로드')}
                </button>
              </div>

              <div className="esg-summary-grid">
                <div className="stat-card">
                  <div className="stat-card-title">{t('복원 면적')}</div>
                  <div className="stat-card-value">8.4ha</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-title">{t('탄소 격리량 (tCO₂/년)')}</div>
                  <div className="stat-card-value">3.6t</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-title">{t('수거 폐기물')}</div>
                  <div className="stat-card-value">1,240kg</div>
                </div>
                <div className="stat-card">
                  <div className="stat-card-title">{t('참여 시민')}</div>
                  <div className="stat-card-value">680명</div>
                </div>
              </div>

              <div className="row gap16 wrap">
                <div className="esg-chart-card grow">
                  <div className="h3">{t('월별 탄소 격리량 추이')}</div>
                  <div className="chart-label">2026년 2분기</div>
                  <TrendLineChart data={monthlyTrend} />
                </div>
                <div className="esg-chart-card grow">
                  <div className="h3">{t('스폰서 프로젝트별 기여도')}</div>
                  <div className="chart-label">프로젝트 기여 분포</div>
                  <div className="chart-grid">
                    {sponsorContribution.map((d) => (
                      <div key={d.label} className="chart-bar" style={{ height: `${d.value}%` }}>
                        <span>{d.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row gap16 wrap esg-highlight-row">
                <div className="esg-highlight-card grow">
                  <div className="row gap10 center">
                    <div className="esg-highlight-icon">
                      <Leaf size={19} strokeWidth={2.2} />
                    </div>
                    <div className="h3">{t('Scope 3 탄소 감축 기여 데이터')}</div>
                  </div>
                  <div className="stat-card-value" style={{ fontSize: 26 }}>
                    3.6 tCO₂
                  </div>
                  <div className="txt">
                    {t('반영 가능')} · {t('검증된 ESG 성과 데이터')}
                  </div>
                </div>
                <div className="esg-highlight-card grow">
                  <div className="row gap10 center">
                    <div className="esg-highlight-icon">
                      <BadgeCheck size={19} strokeWidth={2.2} />
                    </div>
                    <div className="h3">{t('브랜딩 캠페인용 인증 뱃지·로고')}</div>
                  </div>
                  <div className="txt grow">{t('공식 인증 배지와 로고 파일을 브랜딩·홍보 자료로 자유롭게 활용하세요.')}</div>
                  <button
                    type="button"
                    className="wf-btn solid"
                    style={{ alignSelf: 'flex-start' }}
                    onClick={() => alert(t('데모: 브랜딩 자료를 다운로드합니다.'))}
                  >
                    <Download size={15} strokeWidth={2.2} />
                    {t('다운로드')}
                  </button>
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
