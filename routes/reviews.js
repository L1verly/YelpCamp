const express = require("express");
const router = express.Router({ mergeParams: true });
const reviews = require("../controllers/reviews");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

router.post("/", isLoggedIn, validateReview, reviews.createOne);

router.delete("/:reviewId", isReviewAuthor, reviews.deleteOne);

module.exports = router;
