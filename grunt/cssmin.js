module.exports = {
    all: {
      files: [{
        expand: true,
        cwd: 'dist/assets/css',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/assets/css',
        ext: '.min.css'
      }]
    }
};