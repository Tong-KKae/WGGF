// Wraps page content in the original wireframe's rounded white "screen" card.
export function ScreenCard({ children, style }) {
  return (
    <div className="screen-card" style={style}>
      {children}
    </div>
  );
}
