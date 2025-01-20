import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "65ch",
          lg: "65ch",
          xl: "70ch",
          "2xl": "80ch",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
      },
      colors: {
        primary: "#FAE500",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
