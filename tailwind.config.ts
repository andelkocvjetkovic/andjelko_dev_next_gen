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
          md: "52rem",
          lg: "64rem",
          xl: "72rem",
          "2xl": "76rem",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#9a3f2c",
          foreground: "#fff8f2",
        },
        background: "#f8f5ef",
        foreground: "#1f1c19",
        muted: {
          DEFAULT: "#f1ece4",
          foreground: "#60574d",
        },
        border: "#d9cebf",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#201d1a",
            "--tw-prose-headings": "#1b1815",
            "--tw-prose-lead": "#5e554b",
            "--tw-prose-links": "#9a3f2c",
            "--tw-prose-bold": "#1b1815",
            "--tw-prose-counters": "#6c6258",
            "--tw-prose-bullets": "#84796d",
            "--tw-prose-hr": "#d9cebf",
            "--tw-prose-quotes": "#201d1a",
            "--tw-prose-quote-borders": "#9a3f2c",
            "--tw-prose-captions": "#6c6258",
            "--tw-prose-code": "#201d1a",
            "--tw-prose-pre-code": "#201d1a",
            "--tw-prose-pre-bg": "#efe7dc",
            "--tw-prose-th-borders": "#d9cebf",
            "--tw-prose-td-borders": "#d9cebf",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
