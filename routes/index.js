var express = require("express");
var router = express.Router();
var bankCtrl = require("../controllers/bank");

/* GET home page. */
router.get("/", bankCtrl.list);

router.get("/loan", bankCtrl.listV2);

router.get("/detail", bankCtrl.show);


module.exports = router;
