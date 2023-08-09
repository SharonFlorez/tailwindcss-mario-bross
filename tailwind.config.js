module.exports = {
    purge: [
        './public/**/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(/files/img/wave-white.png)',
                'wave-pattern-dots': 'url(/files/img/pattern-white-dots.png)',
                'pattern-characters-red': "url('/files/img/pattern-characters-red.png')",
                'character-mario': "url('/files/img/character-l.png')",
                'wave-pink': "url('/files/img/wave-pink.png')",
                'yellow-dots': "url('/files/img/pattern-yellow-dots.png')",
            }),
            screens: {
                'xsm': '320px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}