import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.75rem",
        sm: "2rem",
        lg: "4rem",
        xl: "2rem",
        "2xl": "6rem",
      },
    },

    extend: {
      backgroundImage: {
        landing: "url('/blurry.svg')",
      },
      keyframes: {},
      animation: {},
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "white",
        secondaryColor: "#5eead4",
        altSecondaryColor: "#4fc1b0",
        backgroundColor: "#10152b",
        boxBackground: "#41568a1a",
        paragrahColor: "#a7c5d2",
      },
    },
  },
  plugins: [],
} satisfies Config;
