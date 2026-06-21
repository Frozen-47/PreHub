/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        surface: "rgb(var(--surface))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        muted: "rgb(var(--muted))",
        border: "rgb(var(--border))",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'], 
      },
    },
  },
  plugins: [],
}
