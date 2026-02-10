import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                charcoal: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d',
                    950: '#1a1a1a',
                },
                gold: {
                    50: '#fdfbf3',
                    100: '#faf5e0',
                    200: '#f4e8b8',
                    300: '#edd88a',
                    400: '#e6c55f',
                    500: '#d4af37',
                    600: '#c4942e',
                    700: '#a47527',
                    800: '#865d25',
                    900: '#6f4d22',
                    950: '#402a11',
                },
                warmOrange: {
                    50: '#fff4ed',
                    100: '#ffe6d5',
                    200: '#feccaa',
                    300: '#fdaa74',
                    400: '#fb7d3c',
                    500: '#ff6b35',
                    600: '#ed4813',
                    700: '#c5360f',
                    800: '#9c2d10',
                    900: '#7d2910',
                    950: '#441206',
                },
            },
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                inter: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-royal': 'linear-gradient(135deg, #1a1a1a 0%, #3d3d3d 50%, #1a1a1a 100%)',
                'gradient-gold': 'linear-gradient(135deg, #c4942e 0%, #d4af37 50%, #e6c55f 100%)',
                'gradient-fire': 'linear-gradient(to top, #ff6b35, #f4e8b8)',
            },
            boxShadow: {
                'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
                'glow-orange': '0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(255, 107, 53, 0.1)',
                'royal': '0 10px 40px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(212, 175, 55, 0.2)',
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
