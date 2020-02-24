var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var utilitySchema = new Schema({
  benefits: { type: Array },
  requires: { type: Array },
  documents: { type: Array },
  code: String
});

exports.utility_schema = utilitySchema;

exports.utilities = mongoose.model("utilities", utilitySchema);
