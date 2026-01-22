import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        waveScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "wave-scroll": "waveScroll 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
