const reviewController = {};
const Review = require("../models/Review");

reviewController.createReview = async (req, res) => {
  try {
    let { name, review, productId } = req.body;
    const newReview = new Review({
      productId,
      name,
      review,
    });
    await newReview.save();
    res.status(200).json({ status: "success", data: newReview });
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.message });
  }
};

reviewController.getReviewList = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);
    const reviewList = await Review.find({ productId: productId });
    if (reviewList) {
      return res.status(200).json({ status: "success", reviewList });
    }
    throw new Error("getReview error");
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

module.exports = reviewController;
