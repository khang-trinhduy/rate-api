var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var contactSchema = new Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true, default: "female" },
  name: { type: String, required: true },
  bank: { type: String },
  period: { type: String }
});

module.exports.contacts = mongoose.model("contacts", contactSchema);
