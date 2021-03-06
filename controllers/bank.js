var { banks } = require("../models/bank");

var bankService = require("../services/bank");
const helper = require("../helpers");

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
    if (result) {
      res.status(201).json(result);
    } else {
      res.status(400).json({ message: "bank has already existed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server fault" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    let result = await bankService.removeOne(req.params.id);
    if (result) {
      res.status(204).json(result);
    } else {
      res.status(400).json({ message: "violate permission" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("server fault");
  }
};

exports.list = async (req, res, next) => {
  try {
    let result = await helper.bankQueryHandler(req);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server fault" });
  }
};

exports.listV2 = (req, res, next) => {
  banks.find({}, (error, banks) => {
    if (error) {
      render(res, "error", error);
    } else {
      banks.forEach((bank) => {
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
    banks.findOne({ normalized: req.query.code }, (error, bank) => {
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
