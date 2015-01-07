metron-client
========

A client library for working with [metron](https://github.com/reddit/metron).

### Build

`npm install && grunt`

### Usage Examples

#### In the browser

```js
var tracker = new Metron.Tracker({
  domain: 'https://redditanalytics.com',
});

tracker.send({
  event: 'comment-embed',
  action: 'create',
  payload: {
    thing: id,
    sr: sr,
    live: live,
  },
}, callback);
```

#### In node.js

**NOTE**: See [request](https://github.com/request/request) for http api.

```js
var Metron = require('metron-client');

var tracker = new Metron.Tracker({
  domain: 'https://redditanalytics.com',
});

var request = tracker.send({
  event: 'comment-embed',
  action: 'create',
  payload: {
    thing: id,
    sr: sr,
    live: live,
  },
}, callback);
```
