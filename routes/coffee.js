const express = require("express");
const path = require("path");
const router = express.Router();

/* GET home page. */
router.get("/coffee", function (req, res) {
    res.render("coffee.ejs");
});

module.exports = router;
