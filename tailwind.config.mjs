 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTheme: '#11001F',
        lighHover: '#fcf4ff',
        darkHover: '#2a004a'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}