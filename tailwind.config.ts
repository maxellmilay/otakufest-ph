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
                theme: 'url("https://res.cloudinary.com/dhyoibvtc/image/upload/v1718507762/2024-custombg_lxqwxq.png")',
                heroBg: 'url("https://res.cloudinary.com/dhyoibvtc/image/upload/v1718514049/hero-bg_rlznav.png")',
            },
            colors: {
                site: {
                    main: '#922424',
                    secondary: '#FFFFFF',
                },
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                yaldevi: ['Yaldevi', 'sans-serif'],
                'montserrat-alt': ['Montserrat Alternates', 'sans-serif'],
            },
            screens: {
                xs: '500px',
            },
            keyframes: {
                slide: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                slide: 'slide 1s forwards',
            },
        },
    },
    plugins: [],
};
export default config;
