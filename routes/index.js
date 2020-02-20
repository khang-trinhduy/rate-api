var express = require("express");
var router = express.Router();
var bankCtrl = require("../controllers/bank");
var statCtrl = require('../controllers/stat')

/* GET home page. */
router.get("/", bankCtrl.list);

router.get("/loan", bankCtrl.listV2);

router.get("/detail", bankCtrl.show);

router.get("/stats/:id", statCtrl.show);

router.get("/stats", statCtrl.list);

module.exports = router;
