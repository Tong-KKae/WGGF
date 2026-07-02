import { Link, useNavigate } from 'react-router-dom';
import { useT } from '../../i18n';

export function SiteHeader({ suffix = '', backTo, backLabel, center, right }) {
  const navigate = useNavigate();
  const t = useT();
  return (
    <>
      <div className="site-header row between center">
        <Link to="/" className="logo">
          <img className="site-logo" src="/oceanproof_logo.png" alt="OceanProof logo" />
          <span>OceanProof{suffix}</span>
        </Link>
        {backTo ? (
          <div
            className="txt"
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate(backTo)}
          >
            {backLabel ?? t('← 메인으로')}
          </div>
        ) : (
          center
        )}
        <div className="row gap8 center">{right}</div>
      </div>
      <div className="divider" />
    </>
  );
}
