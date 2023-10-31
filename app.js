const express = require("express");
const path = require("path");
const app = express();

const homeRouter = require("./routes/home");
const faucetRouter = require("./routes/faucet");
const coffeeRouter = require("./routes/coffee");
app.use("/", homeRouter);
app.use("/faucet", faucetRouter);
app.use("/coffee", coffeeRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

const PORT = 3000;
app.listen(PORT, (error) => {
    if (!error)
        console.log(
            "Server is Successfully Running, and App is listening on port " +
                PORT
        );
    else console.log("Error occurred, server can't start", error);
});
