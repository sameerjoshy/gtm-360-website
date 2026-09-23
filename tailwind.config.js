/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0A192F', // Deep Navy
                secondary: '#F1F5F9', // Slate 100
                accent: '#4F46E5', // Indigo 600
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
                'panel': '0 8px 40px -8px rgb(0 0 0 / 0.18)',
            },
        },
    },
    plugins: [],
}
