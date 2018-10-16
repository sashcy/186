module.exports = {
    pages: {
        files: [
            { expand: true, cwd: 'src/',  src: ['*.md', '*.html'],                           dest: 'dist' },
        ],
    },
    svg: {
        files: [
            { expand: true, cwd: 'src/assets/', src: ['svg/**'],                           dest: 'dist/assets' },
        ],
    },
};