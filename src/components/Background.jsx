const WIDTH = 1270;
const HEIGHT = 650;
const COLUMNS = 11;
const ROWS = 6;

const points = Array.from({ length: ROWS }, (_, row) =>
  Array.from({ length: COLUMNS }, (_, column) => ({
    x: Math.round(35 + column * 120 + Math.sin(row * 2.1 + column * 1.7) * 38),
    y: Math.round(45 + row * 112 + Math.cos(column * 1.9 + row * 1.4) * 36),
  }))
);

const lines = points.flatMap((row, rowIndex) =>
  row.flatMap((point, columnIndex) => {
    const neighbours = [
      points[rowIndex]?.[columnIndex + 1],
      points[rowIndex + 1]?.[columnIndex],
      (rowIndex + columnIndex) % 2 === 0
        ? points[rowIndex + 1]?.[columnIndex + 1]
        : null,
    ].filter(Boolean);

    return neighbours.map((neighbour, index) => ({
      key: `${rowIndex}-${columnIndex}-${index}`,
      x1: point.x,
      y1: point.y,
      x2: neighbour.x,
      y2: neighbour.y,
    }));
  })
);

export default function Background({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        className="h-full w-full"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#3f3f46" strokeOpacity="0.65" strokeWidth="1">
          {lines.map((line) => (
            <line
              key={line.key}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
            />
          ))}
        </g>

        <g fill="#27272a" fillOpacity="0.75">
          {points.flatMap((row, rowIndex) =>
            row.map((point, columnIndex) => (
              <circle
                key={`${rowIndex}-${columnIndex}`}
                cx={point.x}
                cy={point.y}
                r="2.2"
              />
            ))
          )}
        </g>
      </svg>
    </div>
  );
}
