module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
  // Tasks
  compass: {
    dist: {
      options: {
        sassDir: 'src/sass/',
        specify: 'src/sass/styles.scss',
        cssDir: 'src/css/'
      }
    }
  },

	uglify: {
	  my_target: {
      files: {
        'weather.min.js': ['src/js/weather.js'],
        'vendor.min.js': ['src/js/vendor/*.min.js']
      }
    }
	},

	watch: {
	  css: {
	    files: ['src/sass/*.scss'],
	    tasks: ['compass']
	  },
	  js: {
	  	files:['src/js/*.js'],
	  	tasks:['uglify']
	  }
	}

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');

// Default task(s).
grunt.registerTask('default', ['watch']);
grunt.registerTask('dev', ['compass']);
}

