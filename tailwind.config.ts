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
        guests: "url('/images/background/guests-bg.png')",
        shirt: "url('/images/background/shirt-bg.png')",
        events: "url('/images/background/events-bg.png')",
        sponsors: "url('/images/background/sponsors-bg.png')",
      },
      colors: {
        'site-blue': {
          100: '#232942',
          200: '#001760',
          300: '#00BDFF',
        },
      },
      fontFamily: {
        mochiy: ['Mochiy Pop P One', 'sans-serif'],
        bangers: ['Bangers', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

