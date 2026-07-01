export function PayCard({ icon, label, selected, onClick }) {
  return (
    <button type="button" className={`pay-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      {icon}
      <br />
      {label}
    </button>
  );
}
