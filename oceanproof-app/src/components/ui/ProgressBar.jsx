export function ProgressBar({ percent }) {
  return (
    <div className="progress-bar">
      <div className="fill" style={{ width: `${percent}%` }} />
    </div>
  );
}
