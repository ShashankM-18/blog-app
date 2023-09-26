import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        card: "rgba(45, 139, 192, 0.75)",
        lblue: "rgba(45, 139, 192)",
      },
    },
  },
  plugins: [],
};
export default config;
