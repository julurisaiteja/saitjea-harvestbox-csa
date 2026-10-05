import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#e8d9c0",
          fg: "#3b2f27",
          muted: "#5c4a3a",
          primary: "#2f6b3a",
          accent: "#f0c419",
          surface: "#f4efe4",
          border: "#3b2f2744",
          hero: "#2f3d32",
          soil: "#3b2f27",
          sky: "#e8f2ea",
          leaf: "#2f6b3a",
          sun: "#f0c419",
        },
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
        hand: ["Caveat", "cursive"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        "rise-delay": "rise 0.8s ease-out 0.12s both",
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
