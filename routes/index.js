var express = require("express");
var router = express.Router();
var bankCtrl = require("../controllers/bank");
var statCtrl = require("../controllers/stat");
var infoCtrl = require("../controllers/info");
var utilityCtrl = require("../controllers/utility");
var rateCtrl = require("../controllers/rate");
var authCtrl = require("../controllers/authentication");
var dataCtrl = require("../controllers/data");
var updateCtrl = require("../controllers/update");
var userCtrl = require("../controllers/user");

var reviewCtrl = require("../controllers/review");

/* GET home page. */
router.get("/banks", bankCtrl.list);

router.get("/loan", bankCtrl.listV2);

router.get("/stats/:period", statCtrl.show);
router.get("/stats/:id", statCtrl.show);

router.get("/stats", statCtrl.list);

router.get("/informations/:id", infoCtrl.show);

router.get("/informations", infoCtrl.show);

router.get("/utilities/:id", utilityCtrl.show);

router.get("/utilities", utilityCtrl.show);

// bank controller
router.get("/banks/search", bankCtrl.search);
router.get("/banks/snapshot", bankCtrl.snapshot);
router.get("/banks/detail", bankCtrl.show);
router.post("/banks", bankCtrl.create);
router.get("/banks/:id", bankCtrl.detail);

// rate controller
router.get("/rates/all", rateCtrl.list);
router.get("/rates", rateCtrl.show);
router.post("/rates", rateCtrl.create);
router.get("/rates/top", rateCtrl.top);
router.get("/rates/search", rateCtrl.search);
router.get("/rates/recommend", rateCtrl.recommend);
router.get("/rates/:id", rateCtrl.getById);
router.post("/users/:id/rates", rateCtrl.create);

// data controller
router.get("/data/import", dataCtrl.import);
router.get("/data/update", dataCtrl.update);

router.post("/users", userCtrl.subscribe);

router.post("/login", authCtrl.login);

router.post("/register", authCtrl.register);

router.get("/reviews/:id", reviewCtrl.show);

router.post("/users/:id/reviews", reviewCtrl.create);

router.delete("/reviews/:id", reviewCtrl.delete);

router.get("/reviews", reviewCtrl.list);

router.get("/reviews/summary/:id", reviewCtrl.summary);

router.get("/update", updateCtrl.show);

module.exports = router;
