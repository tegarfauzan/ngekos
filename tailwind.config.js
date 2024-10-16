/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "ngekos-gray": "#5e6f76",
                "ngekos-orange": "#ff801a",
                "ngekos-almostwhite": "#f5f6f8",
            },
        },
    },
    plugins: [],
};
