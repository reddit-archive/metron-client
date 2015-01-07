(function(global, undefined) {
  'use strict';

  if (typeof exports !== 'undefined') { // commonjs
    Lib.ajax = global.require('./request-commonjs');
  } else if (global.$ && $.ajax) { // browser with jquery
    Lib.ajax = $.ajax;
    return;
  }

  // Fallback to a minimal ajax implementation.
  Lib.ajax = function(url, options) {
    options = options || {};

    if (arguments.length === 1) {
      options = url || {};
      url = options.url;
    }

    options.type = options.type || 'GET';
    options.contentType = options.contentType ||
      'application/x-www-form-urlencoded; charset=UTF-8';

    var httpRequest;

    if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      try {
        httpRequest = new ActiveXObject('Msxml2.XMLHTTP');
      }
      catch (e) {
        try {
          httpRequest = new ActiveXObject('Microsoft.XMLHTTP');
        }
        /* jshint -W002 */
        catch (e) {}
      }
    }

    if (!httpRequest) {
      return;
    }

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4 && options.complete) {
        options.complete(httpRequest, httpRequest.statusText);
      }
    };

    httpRequest.open(options.type, url);

    for (var key in options.headers) {
      httpRequest.setRequestHeader(key, options.headers[key]);
    }

    httpRequest.setRequestHeader('Content-Type', options.contentType);

    try {
      httpRequest.send(options.data);
    } catch (e) {}

    return httpRequest;

  };

})(this);
