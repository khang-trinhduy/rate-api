var mongoose = require("mongoose");

const { rate_schema } = require("../rate");

var Schema = mongoose.Schema;

var bankSchema = new Schema({
  name: { type: String, required: true },
  interestRates: [rate_schema],
  loanRates: [rate_schema],
  code: { type: String, required: false },
  link: { type: String, required: false }
});

exports.banks = mongoose.model("banks", bankSchema);
exports.bank_schema = bankSchema;
