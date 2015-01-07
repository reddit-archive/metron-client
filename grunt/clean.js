'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');

  var fileName = grunt.config.get('fileName');

  grunt.config.set('clean', {
    build: {
      src: [
        '<%= paths.tmp %>',
        '<%= paths.dist %>',
      ],
    },
  });
};
