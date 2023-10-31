const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
    res.render("coffee.ejs");
});

router.get("/home", function (req, res) {
    res.render("home.ejs");
});

router.get("/faucet", function (req, res) {
    res.render("faucet.ejs");
});

module.exports = router;
