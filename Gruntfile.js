module.exports = function(grunt) {
  
// Project configuration.
grunt.initConfig({
  // Tasks
	concat: {
    dist: {
      src: ['src/css/style.css', 
      		'src/css/responsive.css', 'src/css/fontello.css',
      		'src/css/owl.carousel.css', 'src/css/owl.theme.css'],
      dest: 'styles.css',
    },
  },

	uglify: {
	  my_target: {
      files: {
        'weather.min.js': ['src/js/weather.js'],
        'vendor.min.js': ['src/js/vendor/*.min.js']
      }
    }
	}

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

// Default task(s).
grunt.registerTask('default', ['concat', 'uglify']);

}
 