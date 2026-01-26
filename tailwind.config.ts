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
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#b2462e",
          foreground: "#fff6ec",
        },
        background: "#f6f2ea",
        foreground: "#1f1d1a",
        muted: {
          DEFAULT: "#f4efe7",
          foreground: "#7a7065",
        },
        border: "#dfd4c4",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1f1d1a",
            "--tw-prose-headings": "#1c1a18",
            "--tw-prose-lead": "#6f655a",
            "--tw-prose-links": "#b2462e",
            "--tw-prose-bold": "#1c1a18",
            "--tw-prose-counters": "#7b7064",
            "--tw-prose-bullets": "#9a8f82",
            "--tw-prose-hr": "#dfd4c4",
            "--tw-prose-quotes": "#1f1d1a",
            "--tw-prose-quote-borders": "#b2462e",
            "--tw-prose-captions": "#7b7064",
            "--tw-prose-code": "#1f1d1a",
            "--tw-prose-pre-code": "#1f1d1a",
            "--tw-prose-pre-bg": "#efe6da",
            "--tw-prose-th-borders": "#dfd4c4",
            "--tw-prose-td-borders": "#dfd4c4",
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
