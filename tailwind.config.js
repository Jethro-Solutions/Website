/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-black': '#121212',
        'soft-white': '#F8F8F8', 
        'soft-tan': '#E8E0D5',
        'soft-orange': '#F5A47C',
      },
      fontFamily: {
        serif: ['var(--font-season-serif)'],
        sans: ['var(--font-aeonik)'],
        mono: ['var(--font-ibm-plex-mono)'],
      }
    },
  },
  plugins: [],
} 