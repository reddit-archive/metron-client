'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-concat');

  var fileName = grunt.config.get('fileName');

  grunt.config.set('concat', {
    all: {
      src: grunt.config.get('paths.sources'),
      dest: path.join(
        grunt.config.get('paths.tmp'),
        fileName + '.js'),
    },
  });
};
