// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var index = require('./routes/index');

import express from 'express'
// import path from 'path'
// import bodyParser from 'body-parser'
// import index from './routes/index'

function run() {
  const app = express();

  // view engine setup
  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'ejs');


  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(express.static(path.join(__dirname, 'public')));
  /* GET the home page. */

  var router = express.Router();
  router.get('/', function (req, res, next) {
    res.json({ status: 'ok' })
  });

  app.use('/', router);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });

  app.listen(5000, () => console.log(`Express server listening on port 3000`));

}




// module.exports = app;
export default run