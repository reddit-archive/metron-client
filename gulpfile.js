'use strict';

var glob = require('glob');
var gulp = require('gulp');

var pkg = require('./package.json');

var config = {
  fileName: [pkg.name, pkg.version].join('.'),
  paths: {
    root: __dirname,
    entry: 'src/tracker.js',
    sources: [
      'src/ajax.js',
      'src/tracker.js',
      'src/**/*.js',
      '!src/**/*-commonjs.js',
    ],
    gulp: [
      'gulpfile.js',
      'gulp/*.js',
    ],
    src: 'src/',
    tmp: 'build/',
    dist: 'dist/',
  },
};

glob.sync('./gulp/*.js').forEach(function(path) {
  var task = require('./' + path);

  task(gulp, config);
});

gulp.task('lint', [
  'jscs',
  'jshint',
]);

gulp.task('default', [
  'rimraf',
  'lint',
  'uglify',
]);
