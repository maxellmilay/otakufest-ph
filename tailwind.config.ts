import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/background/hero-bg.png')",
        theme: "url('/images/theme-2024.png')",
      },
      colors: {
        'site': {
          'main': '#c60004',
          'secondary': '#FFFFFF',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        yaldevi: ['Yaldevi', 'sans-serif'],
        'montserrat-alt': ['Montserrat Alternates', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;

