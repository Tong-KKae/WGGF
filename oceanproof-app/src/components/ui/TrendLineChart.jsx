export function TrendLineChart({ data, height = 180 }) {
  const max = Math.max(...data.map((d) => d.value)) * 1.15;
  const stepX = 100 / (data.length - 1);
  const points = data.map((d, i) => ({
    xPct: i * stepX,
    yPct: 100 - (d.value / max) * 100,
    label: d.label,
  }));
  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.xPct} ${p.yPct}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].xPct} 100 L ${points[0].xPct} 100 Z`;

  return (
    <div>
      <div className="trend-chart" style={{ height }}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="trend-chart-svg">
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7be08a" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7be08a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="trendStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3fae5a" />
              <stop offset="100%" stopColor="#8de95f" />
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#trendFill)" stroke="none" />
          <path
            d={linePath}
            fill="none"
            stroke="url(#trendStroke)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {points.map((p) => (
          <span key={p.label} className="trend-dot" style={{ left: `${p.xPct}%`, top: `${p.yPct}%` }} />
        ))}
      </div>
      <div className="row" style={{ justifyContent: 'space-between', marginTop: 10 }}>
        {data.map((d) => (
          <span key={d.label} className="chart-label-x">
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}
