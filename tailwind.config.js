/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        // "./node_modules/flowbite/**/*.js"
        'node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {
            width: {
                '3/20': '15%'
            },
            animation: {
                'spin-my': 'myrotate 0.3s linear forwards'
            },
            keyframes: {
                myrotate: {
                    '0%': {transform: 'rotate(90deg)'},
                    '100%': {transform: 'rotate(0deg)'},
                }
            }
        },
    },
    plugins: [
        // require('flowbite/plugin')
        require('preline/plugin'),
        require('@tailwindcss/forms'),
    ]
}