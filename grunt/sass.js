const sass = require('node-sass');
module.exports = {  
    all: {
      options: {
        implementation: sass,
          style: 'expanded',
          sourcemap: 'none',
      },
     files: [
        { 
          src: 'src/sass/all.scss',              
          dest: 'dist/assets/css/style.css' 
        }, 
      ],
    }, 
};