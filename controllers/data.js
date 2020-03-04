var { banks } = require("../models/bank");
var { rates } = require("../models/rate/import");

exports.import = (req, res, next) => {
  let updated = 0;
  rates.forEach(rate => {
    if (rate.bank) {
      banks
        .findOne({ normalized: rate.bank.toLowerCase() })
        .select("interests name")
        .exec((error, result) => {
          if (error) {
            failed++;
            console.error(error);
          } else if (!result) {
            console.log(`bank ${rate.bank} not found`);
          } else {
            if (!result.interests) {
              console.log(`invalid bank ${rate.bank}`);
            } else {
              result.interests.push(rate);
              result.save((err, ok) => {
                if (ok) {
                  updated++;
                  console.log(`${result.name} updated`);
                }
              });
            }
          }
        });
    } else {
      console.log("invalid rate");
    }
  });
  res.status(200).send({ updated: updated, total: rates.length });
};
