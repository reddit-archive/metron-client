'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.config.set('jshint', {
    sources: {
      src: grunt.config.get('paths.sources'),
      options: {
        jshintrc: 'src/.jshintrc',
      },
    },
    grunt: {
      src: grunt.config.get('paths.grunt'),
      options: {
        jshintrc: '.jshintrc',
      },
    },
  });

};
