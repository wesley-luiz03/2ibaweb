import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        iba: {
          green: "#55804B",
          "green-hover": "#5e8749",
          "green-dark": "#2c3d25",
          lime: "#90d46c",
          ochre: "#bf8b16",
          "ochre-hover": "#a67710",
          "ochre-light": "#eed499",
          blue: "#4898ab",
          sand: "#FAF6EF",
          cream: "#f8eedf",
          brown: "#775127",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        tech: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;