var express = require("express");
var router = express.Router();
var bankCtrl = require("../controllers/bank");

/* GET home page. */
router.get("/", bankCtrl.list);

module.exports = router;
