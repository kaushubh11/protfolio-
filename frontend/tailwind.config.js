/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void-black': '#000000',
                'neon-aqua': '#00ffff',
                'neon-purple': '#ff00ff',
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'neon': '0 0 5px var(--tw-shadow-color)',
                'neon-lg': '0 0 20px var(--tw-shadow-color)',
                'neon-sm': '0 0 3px var(--tw-shadow-color)',
            }
        },
    },
    plugins: [],
}
