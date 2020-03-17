var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var contactSchema = new Schema({
  email: { type: String },
  phone: { type: String },
  gender: { type: String, required: true, default: "female" },
  name: { type: String, required: true },
  bank: { type: String },
  period: { type: String },
  require: { type: Boolean }
});

module.exports.contacts = mongoose.model("contacts", contactSchema);
