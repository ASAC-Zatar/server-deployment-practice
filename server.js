'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/data', (req, res) => {
  res.send('Hello World');
});

app.get('/bad', (req, res) => {
  throw new Error('Something went wrong ');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('*', notFoundHandler);
app.use(errorHandler);
function start(port) {
  app.listen(port, () => console.log(`listenning to port ${port} `));
}
module.exports = {
  app: app,
  start: start,
};
