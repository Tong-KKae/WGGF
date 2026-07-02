import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { FlowSteps } from '../../components/ui/FlowSteps';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n';

const flowLabels = ['상품 선택', '프로젝트 선택', '신청 정보 입력', '결제/계약'];

const amountByPlan = { basic: '3,000,000원', standard: '7,000,000원', premium: '맞춤 견적' };

export function SponsorshipApplyPage() {
  const navigate = useNavigate();
  const { sponsorship, updateSponsorship } = useApp();
  const t = useT();
  const [form, setForm] = useState({
    company: '',
    bizNo: '',
    contact: '',
    dept: '',
    email: '',
    phone: '',
    taxEmail: '',
    campaignName: '',
    request: '',
    logoName: '',
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSponsorship({ applicant: form });
    navigate('/sponsorship/payment');
  };

  const amount = amountByPlan[sponsorship.plan?.key] ?? t('견적 협의');

  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" />
      <form className="pad32 col gap20" onSubmit={handleSubmit}>
        <FlowSteps steps={flowLabels.map(t)} current={3} />
        <div className="h2">{t('스폰서십 신청 정보')}</div>
        <div className="row gap24 split-mobile">
          <div className="col gap16 grow">
            <div className="row gap16 wrap">
              <input className="wf-input grow" placeholder={t('기업명')} value={form.company} onChange={set('company')} />
              <input
                className="wf-input grow"
                placeholder={t('사업자등록번호')}
                value={form.bizNo}
                onChange={set('bizNo')}
              />
            </div>
            <div className="row gap16 wrap">
              <input className="wf-input grow" placeholder={t('담당자명')} value={form.contact} onChange={set('contact')} />
              <input className="wf-input grow" placeholder={t('부서/직책')} value={form.dept} onChange={set('dept')} />
            </div>
            <div className="row gap16 wrap">
              <input className="wf-input grow" placeholder={t('이메일')} value={form.email} onChange={set('email')} />
              <input className="wf-input grow" placeholder={t('연락처')} value={form.phone} onChange={set('phone')} />
            </div>
            <input
              className="wf-input"
              placeholder={t('세금계산서 발행 이메일')}
              value={form.taxEmail}
              onChange={set('taxEmail')}
            />
            <input
              className="wf-input"
              placeholder={t('캠페인에 표시할 기업명')}
              value={form.campaignName}
              onChange={set('campaignName')}
            />
            <label className="wf-img" style={{ height: 100, cursor: 'pointer', display: 'flex' }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => setForm((f) => ({ ...f, logoName: e.target.files?.[0]?.name ?? '' }))}
              />
              🖼 {form.logoName ? `${t('업로드됨')}: ${form.logoName}` : t('기업 로고 업로드')}
            </label>
            <textarea className="wf-input" placeholder={t('요청사항')} value={form.request} onChange={set('request')} />
          </div>

          <div className="side-panel col gap12" style={{ padding: 24 }}>
            <div className="h3">{t('신청 요약')}</div>
            <div className="divider2" />
            <div className="row between txt">
              <div>{t('선택 상품')}</div>
              <div>
                <b>{sponsorship.plan?.label}</b>
              </div>
            </div>
            <div className="row between txt">
              <div>{t('선택 프로젝트')}</div>
              <div>
                <b>{t(sponsorship.project?.name)}</b>
              </div>
            </div>
            <div className="row between txt">
              <div>{t('예상 금액')}</div>
              <div>
                <b>{t(amount)}</b>
              </div>
            </div>
            <div className="divider2" />
            <div className="label">{t('제공 항목')}</div>
            <div className="txt">
              · {t('ESG 리포트')}
              <br />· {t('인증 배지')}
              <br />· {t('기업 로고 노출')}
              <br />· {t('프로젝트 성과 데이터')}
            </div>
            <button type="submit" className="wf-btn accent" style={{ textAlign: 'center', marginTop: 8 }}>
              {t('계약/결제 단계로 이동')}
            </button>
          </div>
        </div>
      </form>
    </ScreenCard>
  );
}
