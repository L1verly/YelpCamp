const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
const upload = require("../cloudinary");

router
  .route("/")
  .get(campgrounds.index)
  .post(
    isLoggedIn,
    validateCampground,
    upload.array("campground[images]"),
    campgrounds.createOne
  );

router.get("/new", isLoggedIn, campgrounds.newForm);

router
  .route("/:id")
  .get(campgrounds.showOne)
  .put(isLoggedIn, isAuthor, validateCampground, campgrounds.updateOne)
  .delete(isLoggedIn, isAuthor, campgrounds.deleteOne);

router.get("/:id/edit", isLoggedIn, isAuthor, campgrounds.editForm);

module.exports = router;
