type SparklineProps = {
  data: number[];
  color?: "green" | "red" | "blue";
  width?: number;
  height?: number;
};

const STROKE: Record<NonNullable<SparklineProps["color"]>, string> = {
  green: "#22c55e",
  red: "#ef4444",
  blue: "#60a5fa",
};

export function Sparkline({ data, color = "blue", width = 80, height = 24 }: SparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className="overflow-visible"
    >
      <polyline points={points} fill="none" stroke={STROKE[color]} strokeWidth={1.5} strokeLinecap="round" />
    </svg>
  );
}
