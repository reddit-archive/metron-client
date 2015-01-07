'use strict';

var pkg = require('./package.json');

module.exports = function(grunt) {
  grunt.initConfig({
    fileName: [pkg.name, pkg.version].join('.'),
    paths: {
      sources: [
        'src/ajax.js',
        'src/tracker.js',
        'src/**/*.js',
        '!src/**/*-commonjs.js',
      ],
      grunt: [
        'Gruntfile.js',
        'grunt/*.js',
      ],
      src: 'src/',
      tmp: 'build/',
      dist: 'dist/',
    },
  });

  grunt.file.expand('./grunt/*.js').forEach(function(config) {
    var task = require('./' + config);

    task(grunt);
  });

  grunt.registerTask('lint', [
    'jshint',
    'jscs',
  ]);

  grunt.registerTask('default', [
    'clean',
    'lint',
    'concat',
    'wrap',
    'uglify',
  ]);

};
