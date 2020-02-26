var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var giftSchema = new Schema({
  applyDate: { type: Date, default: Date.now() },
  content: { type: String, required: true }
});

exports.gift_schema = giftSchema