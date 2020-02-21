var express = require("express");
var router = express.Router();
var bankCtrl = require("../controllers/bank");
var statCtrl = require("../controllers/stat");
var infoCtrl = require("../controllers/info");

/* GET home page. */
router.get("/", bankCtrl.list);

router.get("/loan", bankCtrl.listV2);

router.get("/detail", bankCtrl.show);

router.get("/stats/:id", statCtrl.show);

router.get("/stats", statCtrl.list);

router.get("/informations/:id", infoCtrl.show);

router.get("/informations", infoCtrl.show);

module.exports = router;
