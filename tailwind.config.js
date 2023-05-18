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
        backgroundAlt3: "#FFECE6",
        backgroundAlt4: "#EBF2FC",
        textDark1: "#F7F7F7",
        textDark2: "#F4F6F8",
        textDark3: "#C5D0E6",
        textLight1: "#3F4354",
        textLight2: "#858EAD",
        textLight3: "#97989D",
        textLight4: "#192351",
        textAlt1: "#FF6934",
        textAlt2: "#5D95E8",
        textAlt3: "#347AE2",
        textAlt4: "#0ECC8D",
      },
      boxShadow: {
        meetup: '0px 6px 6px 2px rgba(71, 153, 235, 0.04)',
        notification: '0px 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
