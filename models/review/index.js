var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  title: { type: String },
  message: { type: String, required: true },
  stars: { type: Number, required: true },
  created: { type: Date, default: Date.now() },
  vote: { type: Number, default: 0 },
  bank: { type: mongoose.ObjectId, ref: "banks", required: true },
  user: { type: mongoose.ObjectId, ref: "users", required: true }
});

exports.review_schema = reviewSchema;

exports.reviews = mongoose.model("reviews", reviewSchema);
