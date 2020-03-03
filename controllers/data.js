var { rates } = require("../models/bank/rate");
var { banks } = require("../models/bank");
var service = require("../services/data");

exports.import = (req, res, next) => {
  let updated = 0;
  rates.forEach(rate => {
    banks.findOne({ code: rate.code }, (error, bank) => {
      if (error) {
        console.error(error);
        res.status(500).json(error);
      } else if (!bank) {
        console.log(`bank ${rate.code} not found`);
        res.status(404).json({ error: `bank ${rate.code} not found` });
      } else {
        service.handler(bank, rate, "unlimit");
        service.handler(bank, rate, "1m");
        service.handler(bank, rate, "2m");
        service.handler(bank, rate, "3m");
        service.handler(bank, rate, "6m");
        service.handler(bank, rate, "9m");
        service.handler(bank, rate, "12m");
        service.handler(bank, rate, "13m");
        service.handler(bank, rate, "18m");
        service.handler(bank, rate, "24m");
        service.handler(bank, rate, "36m");
        service.handler(bank, rate, "1w");
        service.handler(bank, rate, "2w");
        service.handler(bank, rate, "3w");
        bank.save((error, result) => {
          if (error) {
            console.error(error);
          } else {
            updated++;
          }
        });
      }
    });
  });
  res.status(200).json({ updated: `${updated} documents` });
};
