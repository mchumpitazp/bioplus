require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
var productsRouter = require('./routes/productsRouter');
var ordersRouter = require('./routes/ordersRouter');

// connect to database and port
const PORT = process.env.PORT || 3001;
const URL = 'mongodb://localhost:27017/be';
const connect = mongoose.connect(URL);
connect.then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    console.log(app.get('env'));
  });  
}, (err) => console.log(err));

// view engine setup
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(helmet());
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

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
