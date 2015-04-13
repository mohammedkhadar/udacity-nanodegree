module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'views/js/main.js',
        dest: 'views/js/main.min.js'
      },
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
         },
      },
      all: ['views/js/main.js']
    },
    concat: {
      options: {
        separator: ' ',
      },
      dist: {
        src: ['views/css/bootstrap-grid.css', 'views/css/style.css'],
        dest: 'views/css/final.css',
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'views/css',
          src: ['final.css'],
          dest: 'views/css',
          ext: '.min.css'
        }]
      }
    },
    inline: {
      dist: {
        src: 'views/pizza-dev.html',
        dest: 'views/pizza.html'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-inline');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify', 'concat', 'cssmin', 'inline']);
};