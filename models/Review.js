const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./Product");
const reviewSchema = Schema(
  {
    productId: { type: mongoose.ObjectId, ref: Product, required: true },
    name: { type: String, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true }
);
reviewSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.updatedAt;
  delete obj.createAt;
  delete obj.__v;
  return obj;
};

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
