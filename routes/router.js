var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.post("/upload", function (req, res) {
  console.log(req.files);
});

module.exports = router;
