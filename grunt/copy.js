module.exports = {
    all: {
        files: [
            { expand: true, cwd: 'src/assets', src: ['**'],                           dest: 'dist/assets' },
            { expand: true, cwd: 'src/',  src: ['*.md'],                           dest: 'dist' },
        ],
    },
};