import React from "react";

interface SwingUnderlineProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  speed?: number; // seconds
  className?: string;
}

const SwingUnderline: React.FC<SwingUnderlineProps> = ({
  width = 147,
  height = 110,
  color = "#FE5A1D",
  strokeWidth = 18,
  speed = 2.5,
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 300 80"
      preserveAspectRatio="none"
      className={`overflow-visible ${className}`}
      style={{ width, height }}
    >
      <path
        d=" 
            M-100 30
            Q -75 5 -50 30
            T 0 30
            T 50 30
            T 100 30
            T 150 30
            T 200 30
            T 250 30
            T 300 40
          "
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="animate-wave"
        style={{ animationDuration: `${speed}s` }}
      />
    </svg>
  );
};

export default SwingUnderline;
