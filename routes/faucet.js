const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
    res.render("faucet.ejs");
});

router.get("/home", function (req, res) {
    res.render("home.ejs");
});

router.get("/coffee", function (req, res) {
    res.render("coffee.ejs");
});

module.exports = router;
