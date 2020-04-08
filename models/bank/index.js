var mongoose = require("mongoose");

const { rate_schema } = require("../rate");

const { loan_schema } = require("../loan");

const { info_schema } = require("../info");

var { ratestats } = require("../statistic/rate");

var Schema = mongoose.Schema;

var bankSchema = new Schema({
  name: { type: String, required: true },
  interests: [{ type: rate_schema }],
  loans: [loan_schema],
  code: { type: String, required: false },
  link: { type: String, required: false },
  normalized: { type: String, required: false },
  info: info_schema,
  created: { type: Date, default: Date.now() },
  approved: { type: Boolean, default: false },
  createdBy: { type: mongoose.Types.ObjectId },
});

bankSchema.methods.addRate = (rate) => {
  if (!this.interests) {
    this.interests = [];
  }
  this.interests.push(rate);
};

exports.banks = mongoose.model("banks", bankSchema);
exports.bank_schema = bankSchema;
