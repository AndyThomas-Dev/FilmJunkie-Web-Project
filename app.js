// Basic requirements
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var stylus = require('stylus');
var indexRouter = require('./routes/index');
var app = express();

// For receiving JSON in posts
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var jsonParser = bodyParser.json()

// For the database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./db/MyDb.db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Add restful controller
require('./EmployeeController')(app, db, jsonParser);

app.use(logger('dev'));
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
