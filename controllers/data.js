var { banks } = require("../models/bank");
var { rates } = require("../models/rate/import");
var { rates_seed } = require("../models/rate/seed");
var { updates } = require("../models/update");
var { fools } = require("../models/rate/aprilfool");
var { after } = require("../models/rate/afternoon");
var bankService = require("../services/bank");

exports.import = (req, res, next) => {
  let updated = 0;
  banks.find({}, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else if (!result) {
      res.status(404).send({ error: "cannot find any banks" });
    } else {
      result.forEach((bank) => {
        let name = bank.name;
        if (name) {
          let rates = rates_seed.filter((e) => e.bank == name);
          if (rates && rates.length > 0) {
            bank.interests = rates;
            bank.save();
            updated++;
          } else {
            console.log("rates not found for bank " + bank.name);
          }
        } else {
          console.log("id not found");
        }
      });
      res.status(200).json({ updated: `${updated} documents` });
    }
  });
};

exports.update = async (req, res, next) => {
  let updated = 0;
  if (req.query.fool) {
    let banks = await bankService.list();
    let results = [];
    banks.forEach((bank) => {
      let interests = fools.filter((e) => e.bank === bank.name);
      if (!interests) {
        console.log("cannot find update for " + bank.name);
      } else {
        if (!bank.interests) {
          bank.interests = [];
        }
        bank.interests = bank.interests.concat(interests);
        bank.save();
        results.push(bank);
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error);
            } else {
            }
          }
        );
      }
    });
    res.status(200).json({ banks: results });
  } else if (req.query.after) {
    let banks = await bankService.list();
    let results = [];
    banks.forEach((bank) => {
      let interests = after.filter((e) => e.bank === bank.name);
      if (!interests) {
        console.log("cannot find update for " + bank.name);
      } else {
        if (!bank.interests) {
          bank.interests = [];
        }
        bank.interests = bank.interests.concat(interests);
        bank.save();
        results.push(bank);
        updates.findOneAndUpdate(
          {},
          { date: Date.now() },
          { upsert: true, new: true },
          (error, update) => {
            if (error) {
              console.log(error);
            } else {
            }
          }
        );
      }
    });
    res.status(200).json({ banks: results });
  } else {
    rates.forEach((rate) => {
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
                result.interests = [];
              }
              result.interests.push(rate);
              result.save((err, ok) => {
                if (ok) {
                  updates.findOneAndUpdate(
                    {},
                    { date: Date.now() },
                    { upsert: true, new: true },
                    (error, update) => {
                      if (error) {
                        console.log(error);
                      } else {
                      }
                    }
                  );
                  updated++;
                  console.log(`${result.name} updated`);
                }
              });
            }
          });
      } else {
        console.log("invalid rate");
      }
    });
    res.status(200).send({ updated: updated, total: rates.length });
  }
};
