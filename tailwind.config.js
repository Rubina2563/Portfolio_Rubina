/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React components
  ],
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 0.5s forwards", // Extend with custom animation
       
      },
    },
  },
  plugins: [],
};
