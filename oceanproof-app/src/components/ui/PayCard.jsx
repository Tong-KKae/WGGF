export function PayCard({ icon: Icon, label, selected, onClick }) {
  return (
    <button type="button" className={`pay-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <Icon size={20} strokeWidth={2} />
      <br />
      {label}
    </button>
  );
}
