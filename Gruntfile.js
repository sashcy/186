module.exports = function(grunt) {

require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: process.cwd() + '/grunt',
        loadGruntTasks: {
            pattern: 'grunt-*',
            config : require('./package.json'),
            scope  : 'devDependencies',
        },
    });
    
};
