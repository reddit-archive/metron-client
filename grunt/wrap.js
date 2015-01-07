'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('wrap', 'Wrap a file.', function() {
    var options = this.options({
      placeholder: /^\ *\/\/ content$/m,
      wrap: '(function(global, undefined) {\n\\\\ content\n})(this);',
    });

    if (!this.files.length) {
      grunt.verbose.warn('No source files were provided.');
    }

    this.files.forEach(function(filePair) {
      filePair.src.forEach(function(src) {
        var input = grunt.file.read(src).trim();
        var output = options.wrap.replace(
          options.placeholder,
          input);

        grunt.file.write(filePair.dest, output);
      });
    });

  });

  grunt.config.set('wrap', {
    all: {
      options: {
        wrap: grunt.file.read('./common-js-wrapper.js'),
      },
      files: [
        {
          expand: true,
          cwd: '<%= paths.tmp %>',
          src: ['*.js'],
          dest: '<%= paths.dist %>',
        },
      ],
    },
  });

};
