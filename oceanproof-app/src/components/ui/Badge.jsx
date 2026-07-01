export function BadgeCircle({ icon, label, earned = true }) {
  return (
    <div className="col center gap8">
      <div className={`badge-box ${earned ? '' : 'locked'}`}>{icon}</div>
      <div className="small">
        {label}
        <br />({earned ? '획득' : '미획득'})
      </div>
    </div>
  );
}
