/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 1s ease-in forwards",
        slideOut: "slideOut 500ms ease-in forwards"
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(5px)",
          },
        },
        slideOut: {
          "0%": {
              transform: "scale(1)",
              opacity: 1
          },
          to: {
              transform: "scale(0)",
              opacity: 0
          }
        }
      },
    },
  },
  plugins: [],
}

