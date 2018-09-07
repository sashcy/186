var mozjpeg = require('imagemin-mozjpeg');
module.exports = {
    dynamic: {                         // Another target
        options: {                       // Target options
            optimizationLevel: 2,
            svgoPlugins: [{ removeViewBox: false }],
            use: [mozjpeg()]
          },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/assets/',                   // Src matches are relative to this path
          src: ['images/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/assets'                  // Destination path prefix
        }]
      }
};