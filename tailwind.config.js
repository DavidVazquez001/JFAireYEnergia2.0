/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // backgroundImage: {
            //     'fondo-blanco': "url('./assets/fondos/fondo_blanco_3.jpg')",
            // },
            colors: {
                background: 'var(--background)',

                foreground: 'var(--foreground)',
                'jf-strong-green': '#00352F',
                'jf-light-green': '#00594F',
                'jf-blue': '#002B4E',
                'jf-yellow': '#CEDC00',
                'jf-white': '#FFFFFF',
            },
        },
    },
    plugins: [],
};
