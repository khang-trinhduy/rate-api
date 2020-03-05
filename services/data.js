var { banks } = require("../models/bank");
var { ratestats } = require("../models/statistic/rate");

exports.handler = (rate, bank) => {
  if (!bank.interests) {
    bank.interests = [];
  }
  ratestats
    .findOne({ period: rate.period })
    .select("maximum")
    .exec((error, stat) => {
      if (stat && stat.maximum == rate.value) {
        rate.max = true;
      } else if (error) {
      }
      bank.interests.push(rate);
      bank.save();
    });
};

exports.show = async period => {
  let stat = {};
  try {
    let result = await ratestats
      .findOne({ period: period })
      .populate("maximum")
      .exec();
    if (result) {
      stat = result;
    } else {
      console.log("stat not found " + period);
    }
    return stat;
  } catch (err) {
    console.error(err);
    return stat;
  }
};
