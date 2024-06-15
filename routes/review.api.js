const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const reviewController = require("../controllers/review.controller");

router.post("/", reviewController.createReview);
router.get("/:id", reviewController.getReviewList);
module.exports = router;
