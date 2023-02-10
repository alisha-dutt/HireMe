const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./controllers/index');
const usersRouter = require('./controllers/users');
//new cutsom controller
const employersRouter = require('./controllers/employers');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//use dotenv to read .env file with config vars
//this is only required for dev mode / render already has a section for enviromment vars 
if(process.env.NODE_ENV != 'production'){
  require('dotenv').config()
}
//mongoDb connection using mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
.then((res)=>{
  console.log('Connected to MongoDb');
})
.catch(()=>{
  console.log('Connection to MongoDb Failed');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
//custom controller req
app.use('/employers', employersRouter);

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
