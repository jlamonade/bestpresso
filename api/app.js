var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");

var app = express();

// mongoose connection
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/espresso_db"

mongoose // connect to mongodb before listening
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log(`MongoDB connected ${MONGO_URI}`))
  .catch((err) => console.log(err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// cors middleware
app.use(cors());

// express session
app.use(
  session({
    secret: process.env.sessionSecret || "very secret session",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongoUrl: MONGO_URI }),
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/testAPI", testAPIRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
