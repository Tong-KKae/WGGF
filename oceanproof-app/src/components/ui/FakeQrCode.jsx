const GRID = 21;
const CELL = 8;
const FINDER_ORIGINS = [
  [0, 0],
  [0, GRID - 7],
  [GRID - 7, 0],
];

function seededRandom(i) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

function finderIsOn(localRow, localCol) {
  const onBorder = localRow === 0 || localRow === 6 || localCol === 0 || localCol === 6;
  const onCenter = localRow >= 2 && localRow <= 4 && localCol >= 2 && localCol <= 4;
  return onBorder || onCenter;
}

function buildModules() {
  const cells = [];
  let seed = 0;
  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const finder = FINDER_ORIGINS.find(
        ([originRow, originCol]) => row >= originRow && row < originRow + 7 && col >= originCol && col < originCol + 7
      );
      let on;
      if (finder) {
        on = finderIsOn(row - finder[0], col - finder[1]);
      } else if (row === 6 || col === 6) {
        on = (row + col) % 2 === 0;
      } else {
        on = seededRandom(seed) > 0.56;
      }
      seed += 1;
      if (on) cells.push([col * CELL, row * CELL]);
    }
  }
  return cells;
}

const modules = buildModules();
const viewSize = GRID * CELL;

export function FakeQrCode({ size = 120 }) {
  return (
    <svg
      viewBox={`0 0 ${viewSize} ${viewSize}`}
      width={size}
      height={size}
      style={{ display: 'block' }}
      role="img"
      aria-label="QR code"
    >
      <rect x="0" y="0" width={viewSize} height={viewSize} fill="#fff" />
      {modules.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={CELL} height={CELL} fill="var(--ink)" />
      ))}
    </svg>
  );
}
