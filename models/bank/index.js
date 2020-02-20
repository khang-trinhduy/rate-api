var mongoose = require("mongoose");

const { rate_schema, rate_wrapper_schema } = require("../rate");

const { loan_schema } = require("../loan");

var { ratestats } = require("../statistic/rate");

var Schema = mongoose.Schema;

var bankSchema = new Schema({
  name: { type: String, required: true },
  interestRates: rate_wrapper_schema,
  loanRates: [loan_schema],
  code: { type: String, required: false },
  link: { type: String, required: false },
  type: { type: Number, required: true, default: 2 }
});

exports.banks = mongoose.model("banks", bankSchema);
exports.bank_schema = bankSchema;
