var { ratestats } = require("../models/statistic/rate");

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
