(function(global, undefined) {
  'use strict';

  var Tracker = Lib.Tracker = function(options) {
    this.domain = options.domain;
  };

  Tracker.prototype.send = function(payload, callback, options) {
    if (!payload) {
      return;
    }

    callback = callback || function() {};
    options = options || {};

    var method = options.method || 'POST';
    var url = this.domain;
    var contentType;
    var data;

    if (method === 'GET') {
      if (typeof payload !== 'string') {
        // Serialize payload as query parameters.
        if (!global.$.param) {
          throw new Error('Using `GET` requires `$.param`');
        }

        payload = $.param(payload);
      }

      url += ('?' + payload);
    } else {
      contentType = 'application/json; charset=utf-8';
      data = JSON.stringify(payload);
    }

    var xhr = Lib.ajax({
      complete: callback,
      contentType: contentType,
      data: data,
      type: method,
      url: url,
    });

    return xhr;
  };

})(this);
