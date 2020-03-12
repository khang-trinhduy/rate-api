var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var updateSchema = new Schema({
  date: { type: Date, required: true, default: Date.now() }
});

exports.updates = mongoose.model("updates", updateSchema);
