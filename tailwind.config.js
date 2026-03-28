/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "drift-slow": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(24px)" }
        }
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "drift-slow": "drift-slow 18s linear infinite"
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

