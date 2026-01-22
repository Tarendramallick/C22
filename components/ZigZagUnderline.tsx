import React from "react";

interface ZigZagUnderlineProps {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  speed?: number;
  className?: string;
}

const ZigZagUnderline: React.FC<ZigZagUnderlineProps> = ({
  width = 920,
  height = 60,
  color = "#ff5a1f",
  strokeWidth = 16,
  speed = 3,
  className = "",
}) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <svg
        viewBox="-100 0 2000 60"
        preserveAspectRatio="none"
        className="w-[220%] h-full animate-wave-scroll"
        style={{ animationDuration: `${speed}s` }}
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
            T 300 30
            T 350 30
            T 400 30
            T 450 30
            T 500 30
            T 550 30
            T 600 30
            T 650 30
            T 700 30
            T 750 30
            T 800 30
            T 850 30
            T 900 30
            T 950 30
            T 1000 30
            T 1050 30
            T 1100 30
            T 1150 30
            T 1200 30
            T 1250 30
            T 1300 30
            T 1350 30
            T 1400 30
            T 1450 30
            T 1500 30
            T 1550 30
            T 1600 30
            T 1650 30
            T 1700 30
            T 1750 30
            T 1800 30
            T 1850 30
            T 1900 30
          "
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ZigZagUnderline;
