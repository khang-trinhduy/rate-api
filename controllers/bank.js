var { banks } = require("../models/bank");

var bankService = require("../services/bank");

var sendJsonResponse = (res, code, content) => {
  res.status(code);
  res.json(content);
};

var render = (res, view, content) => {
  res.render(view, content);
};

exports.create = async (req, res, next) => {
  try {
    let bank = bankService.parseFromBody(req.body);
    let result = await bankService.create(bank);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server fault" });
  }
};

exports.list = (req, res, next) => {
  banks
    .find({})
    .select("-loans")
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
  if (!req.query.code) {
    render(res, "error", { error: "id required" });
  } else {
    banks.findOne({ code: req.query.code }, (error, bank) => {
      if (error) {
        res.status(500).json({ error: "not found" });
      } else if (!bank) {
        res.status(500).json({ error: "not found" });
      } else {
        res.status(200).json(bank);
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

exports.search = async (req, res, next) => {
  try {
    let keywords = req.query.keywords;
    let banks = await bankService.list();
    let results = await bankService.search(keywords, banks);
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "server fault" });
  }
};

exports.snapshot = async (req, res, next) => {
  try {
    let banks = await bankService.list();
    let result = bankService.propagate(banks);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
