'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jscs');

  grunt.config.set('jscs', {
    all: {
      src: [
        grunt.config.get('paths.grunt'),
        grunt.config.get('paths.sources'),
      ],
      options: {
        config: '.jscsrc',
      },
    },
  });

};
