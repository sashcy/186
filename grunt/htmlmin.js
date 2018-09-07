module.exports = {
    all: {   
        options: {
            removeComments: true,
            collapseWhitespace: true
            },
        files: [{
            expand: true,
            cwd: 'src',
            src: ['**/*.html', '*.html'],
            dest: 'dist'
        }]
    }
};