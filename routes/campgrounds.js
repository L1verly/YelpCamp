const express = require("express");
const router = express.Router();
const campgrounds = require("../controllers/campgrounds");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");

router.get("/", campgrounds.index);

router.get("/new", isLoggedIn, campgrounds.newForm);

router.post("/", isLoggedIn, validateCampground, campgrounds.createOne);

router.get("/:id", campgrounds.showOne);

router.get("/:id/edit", isLoggedIn, isAuthor, campgrounds.editForm);

router.put(
  "/:id",
  isLoggedIn,
  isAuthor,
  validateCampground,
  campgrounds.updateOne
);

router.delete("/:id", isLoggedIn, isAuthor, campgrounds.deleteOne);

module.exports = router;
