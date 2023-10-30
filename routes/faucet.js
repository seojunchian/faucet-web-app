var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/faucet", function (req, res) {
    res.render("faucet.ejs");
});

module.exports = router;
