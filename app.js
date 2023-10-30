const express = require("express");
const path = require("path");
/*
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
*/

const app = express();

/*
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
*/
app.use(express.static(path.join(__dirname, "public")));

const indexRouter = require("./routes/index");
const faucetRouter = require("./routes/faucet");
const transferRouter = require("./routes/transfer");
const coffeeRouter = require("./routes/coffee");
app.use("/", indexRouter);
app.use("/faucet", faucetRouter);
app.use("/transfer", transferRouter);
app.use("/coffee", coffeeRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (!error)
        console.log(
            "Server is Successfully Running, and App is listening on port " +
                PORT
        );
    else console.log("Error occurred, server can't start", error);
});

// catch 404 and forward to error handler
/*
app.use(function (req, res, next) {
    next(createError(404));
});
*/

// error handler
/*
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
*/
module.exports = app;
