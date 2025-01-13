import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { sm: "576px" },
    extend: {
      fontFamily: {
        nanum: ["var(--font-nanum)"],
      },
      colors: {
        orange: {
          primary: "#ffa047",
          secondray: "#ff7c3a",
        },
        green: {
          primary: "#82bc49",
        },
        gray: {
          light: "#efeef0",
          primary: "#b1aab4",
          dark: "#766d7d",
        },
        black: {
          soft: "#1b1919",
        },
        charactor: {
          red: "#f76f6a",
          orange: "#ff9a57",
          yellow: "#ffd969",
          green: "#b4e06c",
          blue: "#75c7fa",
          navy: "#6d94ed",
          purple: "#ba87ed",
          pink: "#fca2d1",
          gray: "#b8b3bc",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
