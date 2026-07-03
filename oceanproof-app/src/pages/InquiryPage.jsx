import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SiteHeader } from '../components/layout/SiteHeader';
import { ScreenCard } from '../components/ui/ScreenCard';
import { useApp } from '../context/AppContext';
import { useT } from '../i18n';

const orgTypes = ['대기업', 'EU 수출기업', '지방자치단체', '공공기관', '기타'];
const interests = ['ESG 리포트', '프로젝트 스폰서십', '공공 프로젝트 운영', '데이터 패키지', '브랜딩 캠페인'];
const budgets = ['500만원 미만', '500~1000만원', '1000~3000만원', '3000만원 이상', '미정'];
const benefits = [
  '검증된 환경 임팩트 데이터',
  'ESG 공시용 PDF 리포트',
  '프로젝트별 성과 대시보드',
  '캠페인용 인증 배지/로고',
  '시민 참여 데이터 요약',
];

export function InquiryPage() {
  const navigate = useNavigate();
  const { setInquiry } = useApp();
  const t = useT();
  const [form, setForm] = useState({
    org: '',
    contact: '',
    email: '',
    phone: '',
    orgType: '대기업',
    interest: ['ESG 리포트'],
    budget: '500~1000만원',
    message: '',
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const toggleInterest = (v) =>
    setForm((f) => ({
      ...f,
      interest: f.interest.includes(v) ? f.interest.filter((i) => i !== v) : [...f.interest, v],
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquiry(form);
    navigate('/inquiry/complete');
  };

  return (
    <ScreenCard>
      <SiteHeader right={<button type="button" className="wf-btn">{t('문의하기')}</button>} />

      <form className="row split-mobile" style={{ minHeight: 680 }} onSubmit={handleSubmit}>
        <div className="grow pad32 col gap20">
          <div className="h1">{t('기업·기관 도입 문의')}</div>
          <div className="txt">
            {t('OceanProof는 해양 복원 활동을 검증 가능한 ESG 데이터로 전환하여 기업과 공공기관의 지속가능성 보고를 지원합니다.')}
          </div>

          <div className="row gap16 wrap">
            <input className="wf-input grow" placeholder={t('기관/기업명')} value={form.org} onChange={set('org')} />
            <input className="wf-input grow" placeholder={t('담당자명')} value={form.contact} onChange={set('contact')} />
          </div>
          <div className="row gap16 wrap">
            <input className="wf-input grow" placeholder={t('이메일')} value={form.email} onChange={set('email')} />
            <input className="wf-input grow" placeholder={t('연락처')} value={form.phone} onChange={set('phone')} />
          </div>

          <div className="col gap8">
            <div className="label">{t('기관 유형 선택')}</div>
            <div className="row gap8 wrap">
              {orgTypes.map((o) => (
                <button
                  type="button"
                  key={o}
                  className={`pill choice ${form.orgType === o ? 'selected' : ''}`}
                  onClick={() => setForm((f) => ({ ...f, orgType: o }))}
                >
                  {t(o)}
                </button>
              ))}
            </div>
          </div>

          <div className="col gap8">
            <div className="label">{t('관심 서비스 선택 (복수 선택 가능)')}</div>
            <div className="row gap8 wrap">
              {interests.map((i) => (
                <button
                  type="button"
                  key={i}
                  className={`pill choice ${form.interest.includes(i) ? 'selected' : ''}`}
                  onClick={() => toggleInterest(i)}
                >
                  {t(i)}
                </button>
              ))}
            </div>
          </div>

          <div className="col gap8">
            <div className="label">{t('예상 예산 선택')}</div>
            <div className="row gap8 wrap">
              {budgets.map((b) => (
                <button
                  type="button"
                  key={b}
                  className={`pill choice ${form.budget === b ? 'selected' : ''}`}
                  onClick={() => setForm((f) => ({ ...f, budget: b }))}
                >
                  {t(b)}
                </button>
              ))}
            </div>
          </div>

          <textarea
            className="wf-input"
            placeholder={t('문의 내용을 입력해주세요')}
            value={form.message}
            onChange={set('message')}
          />

          <button type="submit" className="wf-btn accent" style={{ width: 'fit-content' }}>
            {t('문의 제출하기')}
          </button>
        </div>

        <div className="side-panel col gap16" style={{ padding: 32 }}>
          <div className="h3">{t('도입 후 제공되는 것')}</div>
          <div className="col gap14">
            {benefits.map((b) => (
              <div key={b} className="benefit-row">
                <CheckCircle2 size={18} strokeWidth={2.2} className="benefit-check" />
                <div className="txt">{t(b)}</div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </ScreenCard>
  );
}
