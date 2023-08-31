var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var templateRouter = require("./routes/template");

// session
const session = require("express-session");

var app = express();

app.use(
  session({
    secret: "first project",
    resave: false, // session이 변경되지 않았을때는 저장하지 않음.
    saveUninitialized: true, // session이 저장되기 전에 저장될지 말지를 결정
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 미들웨어 (middleware)
// 여러 요청이 들어왔을때, 매 요청마다 확인하는 것은 비효율적임.
// 미들웨어를 사용해 모든 요청이 들어올때마다 check 해줌.
// app.use(function (req, res, next) {
//   console.log("middleware!!"); // 어떠한 요청에도 middleware는 실행됨.
//   next();
// });

app.use("/", indexRouter); // 해당 /로 요청을 보냈을때 indexRouter로 요청을 넘김.
app.use("/users", usersRouter);
app.use("/template", templateRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
