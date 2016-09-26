module.exports = function(grunt) {
  
// Project configuration.
grunt.initConfig({
 // Tasks
	uglify: {
	  files: { 
        src: 'src/js/*.js',  // source files mask
        dest: '',    // destination folder
        expand: true,    // allow dynamic building
        flatten: true,   // remove all unnecessary nesting
        ext: '.min.js'   // replace .js to .min.js
	  }
	}

});

// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

// Default task(s).
grunt.registerTask('default', ['uglify']);

}
 