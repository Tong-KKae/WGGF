import { NavLink, useNavigate } from 'react-router-dom';
import { UserCog, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useT } from '../../i18n';
import './DemoNav.css';

const citizenLinks = [
  { to: '/projects', label: '프로젝트' },
  { to: '/join', label: '참여하기' },
];

const commonLinks = [{ to: '/business', label: '기업 서비스' }, { to: '/gov', label: '공공 서비스' }];

const adminLinks = [
  { to: '/admin', label: '관리자' },
  { to: '/admin/verify/A-0628-114', label: '검증 상세' },
];

const tailLinks = [{ to: '/inquiry', label: '도입 문의' }];

export function DemoNav() {
  const { mode, setMode, lang, setLang } = useApp();
  const navigate = useNavigate();
  const t = useT();

  const handleModeToggle = () => {
    const next = mode === 'citizen' ? 'admin' : 'citizen';
    setMode(next);
    navigate(next === 'admin' ? '/admin' : '/mypage');
  };

  return (
    <nav className="demo-nav">
      <button type="button" className="brand logo logo-demo" title={t('메인페이지로 이동')} onClick={() => navigate('/')}>
        <img className="site-logo" src="/oceanproof_logo.png" alt="OceanProof logo" />
        <span>OceanProof</span>
      </button>
      <div className="links">
        {mode === 'citizen' &&
          citizenLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {t(l.label)}
            </NavLink>
          ))}
        {mode !== 'citizen' &&
          commonLinks.slice(0, 1).map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {t(l.label)}
            </NavLink>
          ))}
        {mode === 'citizen' &&
          commonLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {t(l.label)}
            </NavLink>
          ))}
        {mode === 'admin' &&
          adminLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {t(l.label)}
            </NavLink>
          ))}
        {tailLinks.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
            {t(l.label)}
          </NavLink>
        ))}
      </div>
      <div className="account-links">
        <NavLink to="/mypage" style={{ cursor: 'pointer' }}>
          {t('마이페이지')}
        </NavLink>
        <div className="control-pill row">
          <button
            type="button"
            className="control-seg"
            title={mode === 'citizen' ? t('관리자 모드로 보기') : t('시민 모드로 보기')}
            onClick={handleModeToggle}
          >
            {mode === 'citizen' ? (
              <ShieldCheck size={14} strokeWidth={2.3} />
            ) : (
              <UserCog size={14} strokeWidth={2.3} />
            )}
          </button>
          <span className="control-divider" />
          <button
            type="button"
            className={`control-seg ${lang === 'KR' ? 'active' : ''}`}
            onClick={() => setLang('KR')}
          >
            KR
          </button>
          <button
            type="button"
            className={`control-seg ${lang === 'EN' ? 'active' : ''}`}
            onClick={() => setLang('EN')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
