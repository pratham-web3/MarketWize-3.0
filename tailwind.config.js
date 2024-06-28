
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './work.html'],
    theme: {
        extend: {
            fontFamily: {
                'primaryFont': ['primaryFont', 'sans-serif'],
                'altFont': ['altFont', 'sans-serif'],
                'primaryFontBold': ['primaryFontBold', 'sans-serif'],
                'altFontBold': ['altFontBold', 'sans-serif'],
            },
            colors: {
                'primary': '#0063F4',
                'secondary': '#FF86CD', // Corrected spelling here
                'third': '#17CAFF',
                'dark': '#081528',
                'light': '#D9D9D9',
            }
        },
    },
    plugins: [],
};

