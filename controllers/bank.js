var mongoose = require("mongoose");

var { banks } = require("../models/bank");

var { users } = require("../models/user");

var service = require("../services/bank");

var sendJsonResponse = (res, code, content) => {
  res.status(code);
  res.json(content);
};

var render = (res, view, content) => {
  res.render(view, content);
};

exports.create = (req, res, next) => {
  if (!req.params.id || !req.body.name) {
    res.status(400).send({ error: "id and bank name required" });
  } else {
    users.findById(req.params.id, (error, user) => {
      if (error) {
        res.status(400).send(error);
      } else if (!user) {
        res.status(404).send({ error: "user not found" });
      } else {
        var bank = {
          name: req.body.name,
          normalized: req.body.code
            .toLowerCase()
            .split(" ")
            .join("-"),
          code: req.body.code,
          link: req.body.link
        };
        banks.create(bank, (error, result) => {
          if (error) {
            res.status(400).send(error);
          } else if (result) {
            res.status(201).send(result);
          }
        });
      }
    });
  }
};

exports.list = (req, res, next) => {
  banks
    .find({})
    .select("-interests -loans")
    .exec((error, banks) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else if (!banks) {
        sendJsonResponse(res, 404, "not found");
      } else {
        if (req.query.size && req.query.index) {
          let skip = req.query.size * (req.query.index - 1);
          banks.splice(0, skip);
          sendJsonResponse(res, 200, banks.slice(0, req.query.size));
        } else {
          sendJsonResponse(res, 200, banks);
        }
      }
    });
};

exports.listV2 = (req, res, next) => {
  banks.find({}, (error, banks) => {
    if (error) {
      render(res, "error", error);
    } else {
      banks.forEach(bank => {
        if (bank.loanRates) {
          let loans = bank.loanRates;
          let house, car, duration;
          for (let i = 0; i < loans.length; i++) {
            const loan = loans[i];
            if (loan.type === 3) {
              house = loan;
            } else if (loan.type === 4) {
              car = loan;
            }
          }
          for (let i = 0; i < loans.length; i++) {
            const loan = loans[i];
            if (loan.type === 3 && loan.period === 12) {
              house = loan;
            } else if (loan.type === 4 && loan.period === 12) {
              car = loan;
              duration = loan.value / 2;
            }
          }
          bank.car = car;
          bank.house = house;
          bank.duration = duration;
        }
      });
      render(res, "loan", { banks: banks });
    }
  });
};

exports.show = (req, res, next) => {
  if (!req.query.c) {
    render(res, "error", { error: "id required" });
  } else {
    banks.findOne({ code: req.query.c }, (error, bank) => {
      if (error) {
        render(res, "error", { error: error });
      } else if (!bank) {
        render(res, "error", { error: "bank not found" });
      } else {
        render(res, "detail", { bank: bank });
      }
    });
  }
};

exports.detail = (req, res, next) => {
  if (!req.params.id) {
    sendJsonResponse(res, 400, { error: "id required" });
  } else {
    banks.findOne({ _id: req.params.id }, (error, bank) => {
      if (error) {
        sendJsonResponse(res, 400, { error: error });
      } else if (!bank) {
        sendJsonResponse(res, 404, { error: "bank not found" });
      } else {
        sendJsonResponse(res, 200, bank);
      }
    });
  }
};

// deprecated
exports.showV2 = (req, res, next) => {
  if (!req.query.code) {
    sendJsonResponse(res, 400, "code required");
  } else {
    banks.findOne({ normalized: req.query.code }, (error, bank) => {
      if (error) {
        sendJsonResponse(res, 400, error);
      } else if (!bank) {
        sendJsonResponse(res, 404, {
          error: `cannot find bank with code: ${req.query.code}`
        });
      } else {
        if (req.query.type) {
          let period = service.resolveRatePeriod(req.query.type);
          sendJsonResponse(res, 200, {
            bank: bank,
            rate: bank.interestRates[period]
          });
        } else {
          sendJsonResponse(res, 200, {
            bank: bank,
            rate: bank.interestRates["twelveM"]
          });
        }
      }
    });
  }
};
