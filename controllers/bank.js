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
      render(res, "error", error);
    } else {
      render(res, "index", { banks: banks });
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
