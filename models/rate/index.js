var mongoose = require("mongoose");

const { gift_schema } = require("../gift");

var Schema = mongoose.Schema;

var rateSchema = new Schema({
  withdraw: { type: Number, required: true, default: 1 },
  type: { type: String, required: true, default: "online" },
  verify: { type: Boolean, required: true, default: false },
  value: { type: Number, default: 0.0, required: true },
  bank: { type: String, required: false },
  period: { type: Number, required: true, default: 0 },
  monthly: { type: Number, required: false, default: 0 },
  threshold: { type: Number, required: false },
  loc: { type: String, required: false, default: "all" },
  gift: { type: Boolean, required: true, default: false },
  lastUpdate: { type: Date, default: Date.now() },
  createBy: { type: String, required: true, default: "admin" },
  gifts: [{ type: gift_schema }]
});

var rateWrapper = new Schema({
  unlimit: rateSchema,
  oneW: rateSchema,
  twoW: rateSchema,
  threeW: rateSchema,
  fourW: rateSchema,
  oneM: rateSchema,
  threeM: rateSchema,
  sixM: rateSchema,
  nineM: rateSchema,
  twelveM: rateSchema,
  eighteenM: rateSchema,
  twentyFourM: rateSchema,
  thirtySixM: rateSchema
});

module.exports.rates = mongoose.model("rates", rateSchema);
module.exports.rate_schema = rateSchema;
module.exports.rate_wrapper_schema = rateWrapper;
