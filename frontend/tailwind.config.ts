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
        landing: "url('/wave.svg')",
      },
      fontFamily: {
        header: ["pattaya", "sans-serif"],
      },
      boxShadow: {
        "main-shadow":
          "inset 0 0 12px -5px rgb(5 153 137 / 82%), 0px 0px 1px 0px rgb(0 108 96), -1px 0px 5px 0px rgb(0 108 96)",
      },
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
