import React from "react";

interface SelectUnderlineProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  waves?: number;
  className?: string;
}

const SelectUnderline: React.FC<SelectUnderlineProps> = ({
  width = 180,
  height = 48,
  color = "#FE5A1D",
  strokeWidth = 14,
  waves = 4,
  className = "",
}) => {
  const safeHeight = Math.max(height, strokeWidth * 2.5);
  const waveWidth = 50;
  const totalWidth = waves * waveWidth;

  const pathD = `
    M 0 30
    Q 25 5 50 30
    ${Array.from({ length: waves - 1 })
      .map((_, i) => `T ${(i + 2) * 50} 30`)
      .join(" ")}
  `;

  return (
    <svg
      width={width}
      height={safeHeight}
      viewBox={`0 0 ${totalWidth} 60`}
      preserveAspectRatio="xMinYMid meet"
      className={className}
    >
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SelectUnderline;
