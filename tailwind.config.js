const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/**/*.{vue,jsx,html,js,md}"],
    theme: {
        extend: {
            colors: {
                brand: colors.violet,
            }
        },
    },
    plugins: [],
}