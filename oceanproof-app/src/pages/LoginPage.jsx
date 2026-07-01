import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScreenCard } from '../components/ui/ScreenCard';

export function LoginPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('login');
  const [userType, setUserType] = useState('citizen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(userType === 'citizen' ? '/mypage' : '/business');
  };

  return (
    <ScreenCard>
      <div className="row split-mobile" style={{ minHeight: 560 }}>
        <div className="wf-img grow" style={{ borderRight: '1.5px solid var(--ink)', minHeight: 240 }}>
          해양 복원 현장 이미지
        </div>
        <div className="col grow pad32 gap24" style={{ justifyContent: 'center' }}>
          <a href="/" className="logo" style={{ width: 'fit-content' }}>
            🌊 OceanProof
          </a>
          <div className="row gap8" style={{ borderBottom: '1.5px solid var(--ink)' }}>
            <button type="button" className={`tabbtn ${tab === 'login' ? 'active' : ''}`} onClick={() => setTab('login')}>
              로그인
            </button>
            <button type="button" className={`tabbtn ${tab === 'signup' ? 'active' : ''}`} onClick={() => setTab('signup')}>
              회원가입
            </button>
          </div>
          <form className="col gap12" onSubmit={handleSubmit}>
            <div className="label">사용자 유형</div>
            <div className="row gap8">
              <button
                type="button"
                className={`pill ${userType === 'citizen' ? 'accent' : ''}`}
                onClick={() => setUserType('citizen')}
              >
                시민
              </button>
              <button
                type="button"
                className={`pill ${userType === 'business' ? 'accent' : ''}`}
                onClick={() => setUserType('business')}
              >
                기업/기관 담당자
              </button>
            </div>
            <input className="wf-input" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
              className="wf-input"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="wf-btn accent full">
              {tab === 'login' ? '로그인' : '회원가입'}
            </button>
            <div className="divider2" />
            <div className="row gap8">
              <button type="button" className="wf-btn grow" onClick={handleSubmit}>
                Google로 계속하기
              </button>
              <button type="button" className="wf-btn grow" onClick={handleSubmit}>
                Kakao로 계속하기
              </button>
            </div>
            <div className="small">※ 시민의 경우 계정 없이도 QR 참여 가능 (간편 참여)</div>
          </form>
        </div>
      </div>
    </ScreenCard>
  );
}
