var mongoose = require("mongoose");

var { banks } = require("../models/bank");

var sendJsonResponse = (res, code, content) => {
  res.json(content);
  res.status(code);
};

var render = (res, view, content) => {
  res.render(view, content);
};

exports.list = (req, res, next) => {
  banks.find({}, (error, banks) => {
    if (error) {
      sendJsonResponse(res, 400, error)
    } else {
      let period = 12;
      for (let i = 0; i < banks.length; i++) {
        const bank = banks[i];
        bank.oid = i + 1;
        let rate = bank.interestRates.twelveM.value || 0;
        bank.width = `${rate * 10}%`;
        bank.duration = (rate || 5) / 1.5;
        bank.rate = `${rate}%`;
        bank.margin = rate / 2;
      }
      banks.sort((a, b) => {
        let i1, i2;
        i1 = a.interestRates.twelveM.value || 0;
        i2 = b.interestRates.twelveM.value || 0;
        return i2 - i1;
      });
      for (let i = 0; i < banks.length; i++) {
        const bank = banks[i];
        bank.index = i + 1;
      }
      banks.sort((a, b) => {
        return b.oid - a.oid;
      });
      sendJsonResponse(res, 200, banks);
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
