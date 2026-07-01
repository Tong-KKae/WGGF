import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiteHeader } from '../../components/layout/SiteHeader';
import { ScreenCard } from '../../components/ui/ScreenCard';
import { LangToggle } from '../../components/ui/LangToggle';
import { FlowSteps } from '../../components/ui/FlowSteps';
import { useApp } from '../../context/AppContext';

const flowLabels = ['상품 선택', '프로젝트 선택', '신청 정보 입력', '결제/계약'];

const amountByPlan = { basic: '3,000,000원', standard: '7,000,000원', premium: '맞춤 견적' };

export function SponsorshipApplyPage() {
  const navigate = useNavigate();
  const { sponsorship, updateSponsorship } = useApp();
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

  const amount = amountByPlan[sponsorship.plan?.key] ?? '견적 협의';

  return (
    <ScreenCard>
      <SiteHeader suffix=" · BUSINESS" right={<LangToggle />} />
      <form className="pad32 col gap20" onSubmit={handleSubmit}>
        <FlowSteps steps={flowLabels} current={3} />
        <div className="h2">스폰서십 신청 정보</div>
        <div className="row gap24 split-mobile">
          <div className="col gap16 grow">
            <div className="row gap16 wrap">
              <input className="wf-input grow" placeholder="기업명" value={form.company} onChange={set('company')} />
              <input className="wf-input grow" placeholder="사업자등록번호" value={form.bizNo} onChange={set('bizNo')} />
            </div>
            <div className="row gap16 wrap">
              <input className="wf-input grow" placeholder="담당자명" value={form.contact} onChange={set('contact')} />
              <input className="wf-input grow" placeholder="부서/직책" value={form.dept} onChange={set('dept')} />
            </div>
            <div className="row gap16 wrap">
              <input className="wf-input grow" placeholder="이메일" value={form.email} onChange={set('email')} />
              <input className="wf-input grow" placeholder="연락처" value={form.phone} onChange={set('phone')} />
            </div>
            <input className="wf-input" placeholder="세금계산서 발행 이메일" value={form.taxEmail} onChange={set('taxEmail')} />
            <input
              className="wf-input"
              placeholder="캠페인에 표시할 기업명"
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
              🖼 {form.logoName ? `업로드됨: ${form.logoName}` : '기업 로고 업로드'}
            </label>
            <textarea className="wf-input" placeholder="요청사항" value={form.request} onChange={set('request')} />
          </div>

          <div className="side-panel col gap12" style={{ padding: 24 }}>
            <div className="h3">신청 요약</div>
            <div className="divider2" />
            <div className="row between txt">
              <div>선택 상품</div>
              <div>
                <b>{sponsorship.plan?.label}</b>
              </div>
            </div>
            <div className="row between txt">
              <div>선택 프로젝트</div>
              <div>
                <b>{sponsorship.project?.name}</b>
              </div>
            </div>
            <div className="row between txt">
              <div>예상 금액</div>
              <div>
                <b>{amount}</b>
              </div>
            </div>
            <div className="divider2" />
            <div className="label">제공 항목</div>
            <div className="txt">
              · ESG 리포트
              <br />· 인증 배지
              <br />· 기업 로고 노출
              <br />· 프로젝트 성과 데이터
            </div>
            <button type="submit" className="wf-btn accent" style={{ textAlign: 'center', marginTop: 8 }}>
              계약/결제 단계로 이동
            </button>
          </div>
        </div>
      </form>
    </ScreenCard>
  );
}
