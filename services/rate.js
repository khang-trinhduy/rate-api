var { ratestats } = require("../models/statistic/rate");
var { rates } = require("../models/rate");
var { banks } = require("../models/bank");

exports.handler = (rate, callback) => {
  ratestats
    .findOne({ period: rate.period.toString() })
    .populate("maximum")
    .exec((error, stat) => {
      result = {};
      if (error) {
        callback(error);
      } else {
        rate.max = stat ? stat.maximum == rate.value : false;
        if (rate.value == stat.maximum) {
          callback(stat);
        } else {
          callback(stat);
        }
      }
    });
};

exports.reduce = (rates, date) => {
  try {
    let array = [];
    for (let i = 0; i < rates.length; i++) {
      const rate = rates[i];
      let lastUpdate = new Date(rate.lastUpdate).toDateString();
      if (lastUpdate != date) {
        continue;
      }
      array.push(rate);
    }
    let results = new Map();
    for (let i = 0; i < array.length; i++) {
      const rate = array[i];
      results.set(rate.value, rate);
    }
    return results.entries();
  } catch (error) {
    console.log(error);
  }
};

exports.list = async () => {
  try {
    let results = await banks.aggregate([
      {
        $unwind: "$interests"
      },
      {
        $group: {
          _id: null,
          interests: { $push: "$interests" }
        }
      },
      {
        $project: {
          _id: 0
        }
      }
    ]);
    results = results[0].interests;
    return results;
  } catch (error) {
    console.log(error);
    return error;
  }
};

exports.parseFromBody = req => {
  try {
    return {
      value: req.body.value,
      threshold: req.body.threshold,
      period: req.body.period
    };
  } catch (error) {
    console.error(error);
  }
};

exports.filter = (value, rates) => {
  try {
    let result = [];
    for (let i = 0; i < rates.length; i++) {
      const rate = rates[i];
      if (rate.value == value) {
        let index = result.findIndex(
          e => e.bank === rate.bank && e.value == value
        );
        if (index >= 0) {
          let d1 = new Date(rate.lastUpdate);
          let d2 = new Date(result[index].lastUpdate);

          if (d1.getTime() > d2.getTime()) {
            result[index] = rate;
          } else {
            continue;
          }
        } else {
          result.push(rate);
        }
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

exports.populate = async rates => {
  try {
    for (let i = 0; i < rates.length; i++) {
      const rate = rates[i];
      let bank = await banks.findById(rate.bank).exec();
      rate.bank = bank.name;
    }
    return rates;
  } catch (error) {
    console.log(error);
    return error;
  }
};
