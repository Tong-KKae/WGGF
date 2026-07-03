import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useT } from '../../i18n';
import { projectMapMarkers } from '../../data/mockData';

export function FakeMap({ markers = projectMapMarkers, onSelect, height = 240 }) {
  const navigate = useNavigate();
  const t = useT();

  const handleClick = (marker) => {
    if (onSelect) onSelect(marker);
    else navigate(`/projects/${marker.id}`);
  };

  return (
    <div className="fake-map" style={{ height }}>
      <img className="fake-map-bg" src="/korea-map-south.svg" alt="" />
      {markers.map((m) => (
        <button
          key={m.id}
          type="button"
          className="fake-map-pin"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
          onClick={() => handleClick(m)}
        >
          <MapPin size={20} strokeWidth={2.3} fill="currentColor" fillOpacity={0.15} />
          <span className="fake-map-pin-label">{t(m.label)}</span>
        </button>
      ))}
    </div>
  );
}
