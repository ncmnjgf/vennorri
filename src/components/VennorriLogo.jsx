export default function VennorriLogo({ size = "md", inverted = false }) {
  const color = inverted ? "#ffffff" : "#000000";
  const accentColor = "#CB2B2B";
  const sizes = {
    sm: { width: 100, textSize: 15, dotSize: 4 },
    md: { width: 130, textSize: 19, dotSize: 5 },
    lg: { width: 180, textSize: 26, dotSize: 7 },
  };
  const s = sizes[size] || sizes.md;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={s.width}
      viewBox={`0 0 200 ${s.textSize + 16}`}
      role="img"
      aria-label="Vennorri"
    >
      {/* Brand name */}
      <text
        x="0"
        y={s.textSize}
        fontFamily="'Montserrat', sans-serif"
        fontWeight="900"
        fontSize={s.textSize}
        letterSpacing="4"
        fill={color}
        textAnchor="start"
        style={{ textTransform: "uppercase" }}
      >
        VENNORRI
      </text>
      {/* Red accent dot */}
      <circle
        cx={s.width - s.dotSize * 0.5}
        cy={s.textSize - s.dotSize + 1}
        r={s.dotSize * 0.55}
        fill={accentColor}
      />
      {/* Thin underline */}
      <line
        x1="0"
        y1={s.textSize + 5}
        x2={s.width * 0.45}
        y2={s.textSize + 5}
        stroke={accentColor}
        strokeWidth="1.5"
      />
    </svg>
  );
}
