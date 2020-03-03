var mongoose = require("mongoose");

const { rate_schema } = require("../rate");

const { loan_schema } = require("../loan");

const { info_schema } = require("../info");

var { ratestats } = require("../statistic/rate");

var Schema = mongoose.Schema;

var bankSchema = new Schema({
  name: { type: String, required: true },
  interestRates: [{ type: Schema.Types.ObjectId, ref: "rates" }],
  loanRates: [loan_schema],
  code: { type: String, required: false },
  link: { type: String, required: false },
  normalized: { type: String, required: false },
  info: info_schema
});

bankSchema.method("addRate", rate => {
  if (rate) {
  }
});

exports.bank_schema = bankSchema;

exports.banks = mongoose.model("banks", bankSchema);
