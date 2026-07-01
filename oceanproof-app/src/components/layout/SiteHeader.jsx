import { Link, useNavigate } from 'react-router-dom';

export function SiteHeader({ suffix = '', backTo, backLabel = '← 메인으로', center, right }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="site-header row between center">
        <Link to="/" className="logo">
          🌊 OceanProof{suffix}
        </Link>
        {backTo ? (
          <div
            className="txt"
            style={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => navigate(backTo)}
          >
            {backLabel}
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
