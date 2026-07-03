import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Camera } from 'lucide-react';
import { ScreenCard } from '../components/ui/ScreenCard';
import { Pill } from '../components/ui/Pill';
import { FakeQrCode } from '../components/ui/FakeQrCode';
import { activityChoices } from '../data/mockData';
import { useT } from '../i18n';

export function JoinPage() {
  const navigate = useNavigate();
  const [activity, setActivity] = useState('seagrass');
  const [memo, setMemo] = useState('');
  const [photoName, setPhotoName] = useState('');
  const t = useT();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/join/complete');
  };

  return (
    <ScreenCard>
      <div className="site-header row between center">
        <a href="/" className="logo">
          <img className="site-logo" src="/oceanproof_logo.png" alt="OceanProof logo" />
          <span>OceanProof</span>
        </a>
        <Pill accent>{t('현장 참여 모드')}</Pill>
      </div>
      <div className="divider" />

      <form className="pad32 col gap24" style={{ maxWidth: 640, margin: '0 auto' }} onSubmit={handleSubmit}>
        <div className="col gap8 center" style={{ textAlign: 'center' }}>
          <div className="row gap10 center" style={{ justifyContent: 'center' }}>
            <span className="step-num-badge">1</span>
            <div className="step-header">{t('QR 스캔으로 참여 시작')}</div>
          </div>
          <div className="qr-box">
            <FakeQrCode size={120} />
          </div>
          <div className="h3">
            {t('QR코드를 스캔하면 앱 설치 없이')}
            <br />
            {t('바로 이 화면이 열립니다')}
          </div>
        </div>

        <div className="divider2" />

        <div className="col gap16">
          <div className="row gap10 center">
            <span className="step-num-badge">2</span>
            <div className="step-header">{t('참여 프로젝트 · 활동 선택')}</div>
          </div>
          <div className="wf-fill pad16 row between center wrap gap8">
            <div className="txt row gap8 center">
              <MapPin size={15} strokeWidth={2.2} />
              {t('참여 프로젝트')}: <b>{t('고성 잘피밭 복원 캠페인')}</b>
            </div>
          </div>
          <div className="row gap8 wrap">
            {activityChoices.map((c) => (
              <button
                type="button"
                key={c.key}
                className="wf-card pad16 grow row gap8 center"
                style={{
                  fontWeight: activity === c.key ? 'bold' : 'normal',
                  background: activity === c.key ? 'var(--gray2)' : '#fff',
                  minWidth: 160,
                }}
                onClick={() => setActivity(c.key)}
              >
                <c.icon size={16} strokeWidth={2.2} />
                {t(c.label)}
              </button>
            ))}
          </div>
        </div>

        <div className="divider2" />

        <div className="col gap16">
          <div className="row gap10 center">
            <span className="step-num-badge">3</span>
            <div className="step-header">{t('GPS · 사진 증거 제출')}</div>
          </div>
          <label className="wf-img" style={{ height: 180, cursor: 'pointer', display: 'flex' }}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? '')}
            />
            <div>
              <div className="row gap8 center" style={{ justifyContent: 'center' }}>
                <Camera size={16} strokeWidth={2.2} />
                {photoName ? `${t('업로드됨')}: ${photoName}` : t('사진 업로드 / 촬영')}
              </div>
            </div>
          </label>
          <div className="row gap16 wrap">
            <div className="wf-fill pad16 grow txt">
              {t('위도/경도: ')}
            </div>
            <div className="wf-fill pad16 grow txt">
              {t('촬영 시각: ')}      
            </div>
          </div>
          <input
            className="wf-input"
            placeholder={t('간단 메모 (선택)')}
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <button type="submit" className="wf-btn accent full">
            {t('활동 기록 제출하기')}
          </button>
        </div>
      </form>
    </ScreenCard>
  );
}
