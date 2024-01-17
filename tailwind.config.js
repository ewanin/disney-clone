/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradCol': '#0F1014',
      },
      boxShadow: {
        '3xl': '-30px 0px 30px 1px rgba(0, 0, 0, 0.1)',
        // box- shadow: - 30px 0px 30px 1px #aaaaaa;
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar" : {
          display: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}