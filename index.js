'use strict';

var path = require('path');
var pkg = require('./package.json');

var filename = [pkg.name, pkg.version].join('.');

require(path.join('./dist', filename));
