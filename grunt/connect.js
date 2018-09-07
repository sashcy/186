module.exports = {
    livereload: {
        options: {
            hostname: '127.0.0.1',
            port    : 2000,
            protocol: 'http',
            base    : 'dist',
            keepalive: false,
            open     : 'http://127.0.0.1:2000',
            livereload: true,
              
        }
    },
    all: {
        options: {
            hostname : '127.0.0.1',
            port     : 2020,
            protocol : 'http',
            base     : 'dist',
            keepalive: true,
            open     : 'http://127.0.0.1:2000',
            livereload: true,
            
        }
    }
};
