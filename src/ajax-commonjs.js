/* jshint node: true */
'use strict';

var request = require('request');
var _ = require('lodash');

module.exports = function(options) {
  options = options || {};

  var method = options.type;
  var body = options.body;
  var headers = options.headers;
  var contentType = options.contentType;

  options = _.omit(options, [
    'method',
    'data',
    'headers',
    'contentType',
  ]);

  return request(options.url, _.defaults({
    method: method,
    headers: _.defaults({}, {
      'Content-Type': contentType,
    }, headers),
    body: body,
  }, options), options.complete);
};
