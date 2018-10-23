module.exports = {
    all: {
        options: {
			plugins: [
				{
					removeViewBox: false
				}, {
					removeUselessStrokeAndFill: false
				}
			]
		},
        files: [
            {
                expand: true, 
                cwd: 'src/assets/', 
                src: ['usb_page/*.svg', 'svg/*.svg'],                           
                dest: 'dist/assets/' 
            },
        ]
    }
};