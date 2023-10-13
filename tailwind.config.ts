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
      },
      colors: {
        'site-blue': {
          100: '#232942',
        },
      },
    },
  },
  plugins: [],
};
export default config;

