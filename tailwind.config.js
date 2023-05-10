/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        backgroundDark1: '#1e252b',
        backgroundDark2: '#262D34',
        backgroundDark3: '#2C353D',
        backgroundDark4: '#3F4354',
        backgroundAlt1: '#FF8F67',
        textLight1: '#F7F7F7',
        textLight2: '#F4F6F8',
        textAlt1: '#FF6934',
      },
    },
  },
  plugins: [],
}
