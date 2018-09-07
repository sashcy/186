module.exports = {
    all: {
        files: [
            { expand: true, cwd: 'src/assets/', src: ['svg/*.svg'],                           dest: 'dist/assets' },
            { expand: true, cwd: 'src/',  src: ['*.md', '*.html'],                           dest: 'dist' },
        ],
    },
};