var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var mypageRouter = require("./routes/mypage");
var mintRouter = require("./routes/mint");
var walletRouter = require("./routes/wallet");
var imageRouter = require("./routes/image");
var marketRouter = require("./routes/market")


var app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({limit: '100mb', extended: false }));
app.use(cors({
  origin: 'http://localhost:8081',
  credentials: true
}))
app.use(cookieParser());


app.use('/', indexRouter);
app.use("/mypage", mypageRouter);
app.use("/mint", mintRouter);
app.use("/wallet",walletRouter);
app.use("/images", imageRouter);
app.use("/market", marketRouter);

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
