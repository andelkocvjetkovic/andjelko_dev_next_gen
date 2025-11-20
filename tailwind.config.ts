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
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#FAE500",
          foreground: "#18181b", // zinc-900
        },
        background: "#09090b", // zinc-950
        foreground: "#fafafa", // zinc-50
        muted: {
          DEFAULT: "#27272a", // zinc-800
          foreground: "#a1a1aa", // zinc-400
        },
        border: "#27272a", // zinc-800
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#fafafa", // zinc-50
            "--tw-prose-headings": "#fafafa", // zinc-50
            "--tw-prose-lead": "#a1a1aa", // zinc-400
            "--tw-prose-links": "#FAE500", // primary
            "--tw-prose-bold": "#fafafa", // zinc-50
            "--tw-prose-counters": "#a1a1aa", // zinc-400
            "--tw-prose-bullets": "#52525b", // zinc-600
            "--tw-prose-hr": "#27272a", // zinc-800
            "--tw-prose-quotes": "#fafafa", // zinc-50
            "--tw-prose-quote-borders": "#FAE500", // primary
            "--tw-prose-captions": "#a1a1aa", // zinc-400
            "--tw-prose-code": "#fafafa", // zinc-50
            "--tw-prose-pre-code": "#fafafa", // zinc-50
            "--tw-prose-pre-bg": "#27272a", // zinc-800
            "--tw-prose-th-borders": "#27272a", // zinc-800
            "--tw-prose-td-borders": "#27272a", // zinc-800
          },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
