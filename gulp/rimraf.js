'use strict';

var rimraf = require('gulp-rimraf');

module.exports = function(gulp, config) {
  gulp.task('rimraf', function() {
      return gulp.src([].concat(
        config.paths.tmp,
        config.paths.dist
      ), { read: false }).pipe(rimraf());
    });
};
