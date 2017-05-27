/**
 * Copyright 2017-present, Chris Stowe.
 * All rights reserved.
 */
var express = require('express');
var app = express();

app.get('/', function (req, resp) {
  // TODO: Send main HTML instead.
  resp.send("Welcome!");
});

// Handle errors.
app.use(function (err, req, res, next) {
  console.error(err.stack);
  // 500 = Internal Error
  res.status(500).send('An error has occurred.');
});

// Handle when no functions or routes respond.
// This must be the last middleware function on the stack.
app.use(function (req, res, next) {
  // 404 = Not Found
  res.status(404);

  if (req.accepts('html')) {
    // TODO: Send 404 HTML instead.
    res.send('Not Found');
    return;
  }

  if (req.accepts('json')) {
    res.send({ error: 'Not Found' });
    return;
  }
});

// Start the server.
app.listen(6000, function() {
  console.log('Express server running on port 6000.');
});