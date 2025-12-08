/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#030303', // Almost absolute black
                surface: '#0a0a0a',     // Dark gray surface
                border: '#1f1f1f',      // Subtle border
                primary: '#3b82f6',     // Professional Blue
                secondary: '#a855f7',   // Professional Purple
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'], // Clean sans
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'spotlight': 'spotlight 2s ease .75s 1 forwards',
            },
            keyframes: {
                spotlight: {
                    '0%': {
                        opacity: 0,
                        transform: 'translate(-72%, -62%) scale(0.5)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translate(-50%,-40%) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
}
