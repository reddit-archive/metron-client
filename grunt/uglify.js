'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var fileName = grunt.config.get('fileName');

  grunt.config.set('uglify', {
    production: {
      files: [
        {
          expand: true,
          cwd: '<%= paths.tmp %>',
          src: [
            '*.js',
            '!*.min.js',
          ],
          dest: '<%= paths.dist %>',
          ext: '.min.js',
          extDot: 'last',
        },
      ],
    },
  });
};
