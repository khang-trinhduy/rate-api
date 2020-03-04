const { rates_seed } = require("../models/rate/seed");
var { banks } = require("../models/bank");
var service = require("../services/data");

exports.import = (req, res, next) => {
  let updated = 0;
  banks.find({}, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else if (!result) {
      res.status(404).send({ error: "cannot find any banks" });
    } else {
      result.forEach(bank => {
        let id = bank._id;
        if (id) {
          let rates = rates_seed.filter(e => e.bank == id);
          if (rates && rates.length > 0) {
            bank.interests = rates;
            bank.save();
            updated++;
          } else {
            console.log("rates not found");
          }
        } else {
          console.log("id not found");
        }
      });
      res.status(200).json({ updated: `${updated} documents` });
    }
  });
};
