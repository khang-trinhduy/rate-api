var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var loanSchema = new Schema({
  type: { type: Number, required: true, default: 3 },
  rate: { type: Number, required: true, default: 0 },
  period: { type: Number, required: true, default: 12 },
  created: { type: Date, required: true, default: Date.now() },
  range: { type: Array, required: false, default: [] },
  update: { type: String }
});

exports.loan_schema = loanSchema;

// tin chap: 2
// the chap: 1
// nha: 3
// xe: 4
// du hoc: 5
