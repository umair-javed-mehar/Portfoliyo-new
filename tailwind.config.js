/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch' },
          '100%': { width: '11ch' } // Adjust ch length to match text length
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        }
      },
      animation: {
        typing: 'typing 3s steps(11) forwards', // 12 characters for "Umair Javed"
        fadeIn: 'fadeIn 2s ease-in forwards',
      }
    }
  },
  plugins: []
};
