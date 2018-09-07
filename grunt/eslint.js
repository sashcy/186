module.exports = {
    all: {
        options: {
            configFile: 'grunt/conf/eslint.json',
            rulePaths: ['grunt/conf/']
        },
        src: [
            'src/js/*.js',
        ],
    },
};