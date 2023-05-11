/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
      colors: {
        backgroundDark1: "#1E252B",
        backgroundDark2: "#262D34",
        backgroundDark3: "#2C353D",
        backgroundDark4: "#3F4354",
        backgroundLight1: "#f7f7f7",
        backgroundLight2: "#FFFFFF",
        backgroundLight3: "#F4F6F8",
        backgroundLight4: "#C5D0E6",
        backgroundAlt1: "#FF8F67",
        backgroundAlt2: "#FF6934",
        textDark1: "#F7F7F7",
        textDark2: "#F4F6F8",
        textLight1: "#3F4354",
        textAlt1: "#FF6934",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
