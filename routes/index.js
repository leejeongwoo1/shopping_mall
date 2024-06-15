const express = require("express");
const userApi = require("./user.api");
const authApi = require("./auth.api");
const productApi = require("./product.api");
const cartApi = require("./cart.api");
const orderApi = require("./order.api");
const reviewApi = require("./review.api");
const router = express.Router();

router.use("/user", userApi);
router.use("/auth", authApi);
router.use("/product", productApi);
router.use("/cart", cartApi);
router.use("/order", orderApi);
router.use("/review", reviewApi);
module.exports = router;
