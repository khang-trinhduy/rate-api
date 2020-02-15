var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var rateSchema = new Schema({
  type: { type: String, required: true, default: "interest" },
  created: { type: Date, required: true, default: Date.now() },
  createBy: { type: String, required: true, default: "admin" },
  verify: { type: Boolean, required: true, default: false },
  value: { type: Number, default: 0.0, required: true },
  period: { type: Number, required: true, default: 0 },
  monthly: { type: Number, required: false, default: 0 },
  threshold: { type: Number, required: false }
});

module.exports.rates = mongoose.model("rates", rateSchema);
module.exports.rate_schema = rateSchema;
