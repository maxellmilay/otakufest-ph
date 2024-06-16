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
        },
    },
    plugins: [],
};
export default config;
