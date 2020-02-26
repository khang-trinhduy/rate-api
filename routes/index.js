var express = require("express");
var router = express.Router();
var bankCtrl = require("../controllers/bank");
var statCtrl = require("../controllers/stat");
var infoCtrl = require("../controllers/info");
var utilityCtrl = require("../controllers/utility");
var rateCtrl = require("../controllers/rate");
var authCtrl = require("../controllers/authentication");

var reviewCtrl = require("../controllers/review");

/* GET home page. */
router.get("/", bankCtrl.list);

router.get("/loan", bankCtrl.listV2);

router.get("/detail", bankCtrl.show);

router.get("/stats/:id", statCtrl.show);

router.get("/stats", statCtrl.list);

router.get("/informations/:id", infoCtrl.show);

router.get("/informations", infoCtrl.show);

router.get("/utilities/:id", utilityCtrl.show);

router.get("/utilities", utilityCtrl.show);

router.get("/banks", bankCtrl.showV2);

router.get("/banks/:id", bankCtrl.detail);

router.get("/rates", rateCtrl.top);

router.post("/login", authCtrl.login);

router.post("/register", authCtrl.register);

router.get('/reviews/:id', reviewCtrl.show)

router.post('/reviews/:id', reviewCtrl.create)

router.delete('/reviews/:id', reviewCtrl.delete)

router.get('/reviews', reviewCtrl.list)

module.exports = router;
