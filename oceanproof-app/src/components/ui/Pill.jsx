export function Pill({ children, accent, className = '' }) {
  return <span className={`pill ${accent ? 'accent' : ''} ${className}`}>{children}</span>;
}

export function ChoicePills({ options, value, onChange, multiple = false }) {
  const isSelected = (key) => (multiple ? value.includes(key) : value === key);
  const handleClick = (key) => {
    if (multiple) {
      onChange(value.includes(key) ? value.filter((v) => v !== key) : [...value, key]);
    } else {
      onChange(key);
    }
  };
  return (
    <div className="row gap8 wrap">
      {options.map((opt) => (
        <button
          type="button"
          key={opt.key ?? opt}
          className={`pill choice ${isSelected(opt.key ?? opt) ? 'selected' : ''}`}
          onClick={() => handleClick(opt.key ?? opt)}
        >
          {opt.label ?? opt}
        </button>
      ))}
    </div>
  );
}
