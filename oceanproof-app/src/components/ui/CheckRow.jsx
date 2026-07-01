export function CheckRow({ checked, label, onToggle }) {
  return (
    <div className="chk-row" onClick={onToggle}>
      <div className={`chk-box ${checked ? 'checked' : ''}`} />
      {label}
    </div>
  );
}
