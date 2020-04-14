var mongoose = require("mongoose");

const { gift_schema } = require("../gift");

var Schema = mongoose.Schema;

var rateSchema = new Schema({
  month: { type: Boolean, default: true },
  withdraw: { type: Number, required: true, default: 1 },
  type: { type: String, required: true, default: "online" },
  verify: { type: Boolean, required: true, default: false },
  value: { type: Number, default: 0.0, required: true },
  bank: { type: String, required: false },
  period: { type: Number, required: true, default: 0 },
  monthly: { type: Number, required: false, default: 0 },
  threshold: { type: String, required: false },
  loc: { type: String, required: false, default: "all" },
  gift: { type: Boolean, required: true, default: false },
  lastUpdate: { type: Date, default: Date.now() },
  createBy: { type: String, required: true, default: "admin" },
  gifts: [{ type: gift_schema }],
  max: { type: Boolean, default: false },
  approved: { type: Boolean, default: false },
  online: {type: Boolean, default: false}
});

module.exports.rates = mongoose.model("rates", rateSchema);
module.exports.rate_schema = rateSchema;
