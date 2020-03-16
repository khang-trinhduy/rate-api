var { users } = require("../models/user");
var { banks } = require("../models/bank");
var { rates } = require("../models/rate");
var rateService = require("../services/rate");

var sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

exports.show = (req, res, next) => {
  if (!req.query.code && !req.query.period) {
    sendJsonResponse(res, 400, { error: "code and period are required" });
  } else {
    banks
      .findOne({ normalized: req.query.code })
      .select("interests")
      .exec((error, bank) => {
        if (error) {
          res.status(500).send(error);
        } else if (bank) {
          let rates = bank.interests.filter(e => e.period == req.query.period);
          if (rates && rates.length > 0) {
            rates.sort((a, b) => {
              return b.lastUpdate - a.lastUpdate;
            });
            res.status(200).send(rates);
          } else {
            res.status(404).send({
              error: `rate with period ${req.query.period} not found`
            });
          }
        } else {
          res.status(404).send({ error: "bank not found" });
        }
      });
  }
};

exports.list = (req, res, next) => {
  banks
    .find({ "interests.period": 12 })
    .select("name interests.value interests.period")
    .exec((err, result) => {
      if (err) {
        sendJsonResponse(res, 500, err);
      } else if (!result) {
        sendJsonResponse(res, 404, { error: "not found" });
      } else {
        sendJsonResponse(res, 200, result);
      }
    });
};

exports.top = async (req, res, next) => {
  try {
    let period = [0, 1, 2, 3, 6, 9, 12, 13, 18, 24, 36];
    if (req.query.period && req.query.period != "NaN") {
      if (req.query.period.length > 1) {
        period = req.query.period.map(x => parseInt(x));
      } else {
        period = [parseInt(req.query.period)];
      }
    }
    let result;
    if (req.query.code && req.query.code != "NaN") {
      result = await banks.aggregate([
        {
          $match: {
            normalized: req.query.code.toLowerCase()
          }
        },
        {
          $unwind: "$interests"
        },
        {
          $match: {
            "interests.period": { $in: period }
          }
        },
        {
          $group: {
            _id: null,
            interests: { $push: "$interests" }
          }
        },
        {
          $project: {
            _id: 0
          }
        }
      ]);
    } else {
      result = await banks.aggregate([
        {
          $unwind: "$interests"
        },
        {
          $match: { "interests.period": { $in: period } }
        },
        {
          $group: {
            _id: null,
            interests: { $push: "$interests" }
          }
        },
        {
          $project: {
            _id: 0
          }
        }
      ]);
    }
    if (req.query.size) {
      if (req.query.period) {
        result = result[0].interests
          .sort((a, b) => b.value - a.value)
          .slice(0, parseInt(req.query.size));
      }
    } else {
      if (req.query.period) {
        result = result[0].interests.sort((a, b) => b.value - a.value);
      }
    }
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.search = async (req, res, next) => {
  try {
    let value = parseFloat(req.query.value);
    let rates = await rateService.list();
    let result = rateService.filter(value, rates);
    result = await rateService.populate(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server fault" });
  }
};

exports.history = (req, res, next) => {
  sendJsonResponse(res, 200, []);
};

exports.create = (req, res, next) => {
  if (
    !req.body.withdraw ||
    !req.body.value ||
    !req.params.id ||
    !req.body.period
  ) {
    sendJsonResponse(res, 400, {
      error: "value, withdraw, bankid and period are required"
    });
  } else {
    users.findById(req.params.id, (err, user) => {
      if (err) {
        sendJsonResponse(res, 400, err);
      } else if (!user) {
        sendJsonResponse(res, 404, { error: "user not found" });
      } else {
        banks.findById(req.body.bank, (error, bank) => {
          if (error) {
            sendJsonResponse(res, 400, error);
          } else if (!bank) {
            sendJsonResponse(res, 404, { error: "bank not found" });
          } else {
            var rate = {
              withdraw: req.body.withdraw,
              type: req.body.type,
              verify: req.body.verify,
              value: req.body.value,
              // TODO bank?
              bank: req.body.bank,
              period: req.body.period,
              monthly: req.body.monthly,
              threshold: req.body.threshold,
              loc: req.body.loc,
              gift: req.body.gift,
              createBy: req.params.id
            };
            bank.addRate(rate);
            bank.save((error, result) => {
              if (error) {
                sendJsonResponse(res, 400, error);
              } else {
                sendJsonResponse(res, 200, result);
              }
            });
          }
        });
      }
    });
  }
};
