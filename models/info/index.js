var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var infoSchema = new Schema({
  tradeName: { type: String, required: true },
  lower_name: { type: String },
  nativeName: { type: String, required: true },
  type: { type: String, required: true },
  founded: { type: Date },
  headquarter: { type: String },
  revenue: { type: Number },
  employees: { type: Number },
  website: { type: String },
  logo: { type: String }
});

exports.info_schema = infoSchema;

exports.informations = mongoose.model("informations", infoSchema);
