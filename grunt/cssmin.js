module.exports = {
    all: {
      files: [{
        expand: true,
        src: ['dist/assets/css/*.css', '!*.min.css'],
        ext: '.min.css'
      }]
    }
};