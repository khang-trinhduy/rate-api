var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var requireSchema = new Schema({
  age: { type: Array, required: false, default: [18, 65] },
  income: { type: Number, required: false, default: 7000000 },
  etc: { type: Array, default: [] }
});
