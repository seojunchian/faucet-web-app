const express = require("express");
const path = require("path");
const app = express();

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
