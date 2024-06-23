/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        2: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        fade_orange: "linear-gradient(to right, #ffffff, #e3b381)",
        primary_surface: "#FFEDDC",
        primary_green: "#085235",
        primary: "#E86900",
        text: "#42454D",
        success: "#43936C",
        surface: "#EBFAF5",
      },
      screens: {
        "xl-custom": "1441px",
      },
    },
  },
  plugins: [],
};
