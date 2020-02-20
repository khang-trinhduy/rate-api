var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var rateStatisticSchema = new Schema({
  type: { type: String, required: true },
  maximum: { type: Number, required: true },
  minimum: { type: Number, required: true },
  count: { type: Number, required: true },
  lastUpdated: { type: Date, required: true, default: Date.now() }
});

exports.ratestats = mongoose.model("ratestats", rateStatisticSchema);

exports.rate_statistic_schema = rateStatisticSchema;
