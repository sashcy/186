module.exports = {
    options: {
        processors: [
            require('autoprefixer')({browsers: ['last 2 version', 'last 5 iOS versions', 'last 3 Safari versions']})
        ],
    },
    dist: {
        src: [
            'dist/assets/css/style.css'
        ],
    }
};
