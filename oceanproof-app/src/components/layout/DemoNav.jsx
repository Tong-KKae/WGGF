import { NavLink, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './DemoNav.css';

const citizenLinks = [
  { to: '/join', label: '참여(QR)' },
  { to: '/projects/goseong-seagrass', label: '상세' },
];

const commonLinks = [{ to: '/business', label: 'ESG(기업)' }, { to: '/gov', label: '대시보드(공공)' }];

const adminLinks = [
  { to: '/admin', label: '관리자' },
  { to: '/admin/verify/A-0628-114', label: '검증상세' },
];

const tailLinks = [
  { to: '/inquiry', label: '도입문의' },
  { to: '/sponsorship/payment', label: '결제' },
];

export function DemoNav() {
  const { mode, toggleMode } = useApp();
  const navigate = useNavigate();

  const handleModeToggle = () => {
    const next = mode === 'citizen' ? 'admin' : 'citizen';
    toggleMode();
    navigate(next === 'admin' ? '/admin' : '/mypage');
  };

  return (
    <nav className="demo-nav">
      <button type="button" className="brand" title="메인페이지로 이동" onClick={() => navigate('/')}>
        🌊 OceanProof
      </button>
      <div className="links">
        {mode === 'citizen' &&
          citizenLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {l.label}
            </NavLink>
          ))}
        {mode !== 'citizen' &&
          commonLinks.slice(0, 1).map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {l.label}
            </NavLink>
          ))}
        {mode === 'citizen' &&
          commonLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {l.label}
            </NavLink>
          ))}
        {mode === 'admin' &&
          adminLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
              {l.label}
            </NavLink>
          ))}
        {tailLinks.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => (isActive ? 'current' : '')}>
            {l.label}
          </NavLink>
        ))}
      </div>
      <div className="account-links">
        {mode === 'citizen' && (
          <NavLink to="/mypage" style={{ cursor: 'pointer' }}>
            마이페이지
          </NavLink>
        )}
        <button type="button" id="mode-toggle" onClick={handleModeToggle}>
          {mode === 'admin' ? '🙋 시민 모드로 전환' : '🛠 관리자 모드로 전환'}
        </button>
      </div>
    </nav>
  );
}
