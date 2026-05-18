import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        team: {
          primary: "#5B21B6",
          secondary: "#7C3AED",
          accent: "#A78BFA",
          dark: "#1E1B4B",
          light: "#EDE9FE",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #A78BFA 100%)",
      },
    },
  },
  plugins: [],
};

export default config;