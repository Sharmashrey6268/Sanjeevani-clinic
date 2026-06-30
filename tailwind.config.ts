import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563eb",
          green: "#16a34a",
          softBlue: "#eff6ff",
          softGreen: "#ecfdf5",
          ink: "#102033"
        }
      },
      boxShadow: {
        soft: "0 20px 50px rgba(37, 99, 235, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
