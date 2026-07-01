export function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="num">{value}</div>
      <div className="txt">{label}</div>
    </div>
  );
}

export function StatRow({ stats }) {
  return (
    <div className="row gap16 wrap">
      {stats.map((s) => (
        <Stat key={s.label} value={s.value} label={s.label} />
      ))}
    </div>
  );
}
