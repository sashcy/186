module.exports = function (grunt) {
  return {
    scripts: {
      files: ['src/js/*.js'],
      tasks: ['eslint', 'uglify'],
    },
    html: {
      files: ['src/*.html'],
      tasks: ['htmlmin'],
    },
    css: {
      files: ['src/sass/**/*.scss'],
      tasks: ['stylelint', 'sass', 'cssmin'],
    },
    images: {
      files: ['src/assets/images/*'],
      tasks: ['imagemin'],
    },
    options: {
      spawn        : false,
      interrupt    : true,
      debounceDelay: 250,
      livereload: true,
      }, 
};
  };
