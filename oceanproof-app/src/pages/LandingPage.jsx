import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../components/layout/SiteHeader';
import { SiteFooter } from '../components/layout/SiteFooter';
import { ScreenCard } from '../components/ui/ScreenCard';
import { useT } from '../i18n';

const flowSteps = [
  { n: '01', title: 'QR로 참여', desc: '시민이 QR로 해양 복원 활동에 참여합니다' },
  { n: '02', title: '데이터 수집', desc: 'GPS·사진·활동 로그가 자동 수집됩니다' },
  { n: '03', title: 'MRV 검증', desc: '위성·드론·GIS 기반으로 데이터를 검증합니다' },
  { n: '04', title: 'ESG 활용', desc: '기업/공공기관이 ESG 리포트로 활용합니다' },
];

const userTypes = [
  { icon: '🙋', title: '시민 참여자', desc: 'QR 스캔으로 바로 활동 참여, 배지·인증서 획득', to: '/join' },
  { icon: '🏢', title: '기업 / ESG 담당자', desc: '검증된 환경 데이터로 ESG 공시 리포트 받기', to: '/inquiry' },
  { icon: '🏛️', title: '지방자치단체·공공기관', desc: '해양 복원 프로젝트 운영 및 정책 성과 관리', to: '/gov' },
];

export function LandingPage() {
  const navigate = useNavigate();
  const t = useT();

  return (
    <ScreenCard>
      <SiteHeader
        center={
          <div className="row gap24 site-nav">
            <div onClick={() => navigate('/projects')}>{t('프로젝트')}</div>
            <div onClick={() => navigate('/sponsorship')}>{t('스폰서십')}</div>
            <div onClick={() => navigate('/inquiry')}>{t('도입 문의')}</div>
          </div>
        }
        right={
          <button type="button" className="wf-btn accent" onClick={() => navigate('/join')}>
            {t('참여하기')}
          </button>
        }
      />

      <div className="hero row gap24 wrap">
        <div className="col gap16 grow" style={{ justifyContent: 'center', minWidth: 280 }}>
          <div className="label">{t('플랫폼 소개')}</div>
          <div className="h1" style={{ whiteSpace: 'pre-line' }}>
            {t('시민의 해양 복원 참여를,\n측정 가능한 ESG 자산으로')}
          </div>
          <div className="txt">
            {t(
              '위성·드론·GIS 복합 검증을 통해 시민 참여 데이터를 신뢰할 수 있는 환경 데이터로 전환하는 통합 디지털 플랫폼입니다.'
            )}
          </div>
          <div className="row gap8 wrap">
            <button type="button" className="wf-btn accent" onClick={() => navigate('/join')}>
              {t('QR로 참여 시작하기')}
            </button>
            <button type="button" className="wf-btn" onClick={() => navigate('/inquiry')}>
              {t('기업/기관 도입 문의')}
            </button>
          </div>
        </div>
        <div className="wf-map grow" style={{ height: 240, minWidth: 280 }}>
          <div className="col gap8 center">
            <div>🗺️ {t('해양 복원 프로젝트 지도')}</div>
            <div className="small">{t('(전국 진행 프로젝트 위치 시각화)')}</div>
          </div>
        </div>
      </div>
      <div className="divider2" />

      <div className="section" style={{ textAlign: 'center' }}>
        <div className="section-title">
          <div className="label">{t('작동 방식')}</div>
          <div className="h2">{t('OceanProof는 이렇게 작동합니다')}</div>
        </div>
        <div className="row gap16 wrap" style={{ justifyContent: 'center' }}>
          {flowSteps.map((s, i) => (
            <span key={s.n} style={{ display: 'contents' }}>
              <div className="flow-card">
                <div className="small">{s.n}</div>
                <div className="h3" style={{ margin: '6px 0' }}>
                  {t(s.title)}
                </div>
                <div className="txt">{t(s.desc)}</div>
              </div>
              {i < flowSteps.length - 1 && <div className="flow-arrow">→</div>}
            </span>
          ))}
        </div>
      </div>
      <div className="divider2" />

      <div className="section">
        <div className="section-title">
          <div className="label">{t('이용 대상 선택')}</div>
          <div className="h2">{t('어떤 목적으로 방문하셨나요?')}</div>
        </div>
        <div className="row gap16 wrap">
          {userTypes.map((u) => (
            <button type="button" key={u.title} className="type-card" onClick={() => navigate(u.to)}>
              <div className="h3" style={{ marginBottom: 8 }}>
                {u.icon} {t(u.title)}
              </div>
              <div className="txt">{t(u.desc)}</div>
            </button>
          ))}
        </div>
      </div>

      <SiteFooter />
    </ScreenCard>
  );
}
