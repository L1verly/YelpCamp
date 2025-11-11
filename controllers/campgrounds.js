const Campground = require("../models/campground");
const { cloudinary } = require("../cloudinary");

const index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

const newForm = async (req, res) => {
  res.render("campgrounds/new");
};

const createOne = async (req, res) => {
  const campground = new Campground(req.body.campground);
  campground.images = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  campground.author = req.user._id;
  await campground.save();
  req.flash("success", "Successfully made a new campground!");
  res.redirect(`campgrounds/${campground._id}`);
};

const showOne = async (req, res) => {
  const campground = await Campground.findById(req.params.id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("author");
  if (!campground) {
    req.flash("error", "Cannot find campground!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { campground });
};

const editForm = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash("error", "Campground not found!");
    return res.redirect(`/campgrounds/${id}`);
  }
  res.render("campgrounds/edit", { campground });
};

const updateOne = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  const imgs = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  campground.images.push(...imgs);
  await campground.save();
  console.log(req.body);
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
  req.flash("success", "Successfully updated campground!");
  res.redirect(`/campgrounds/${campground._id}`);
};

const deleteOne = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id, req.body.campground, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/campgrounds`);
};

module.exports = {
  index,
  newForm,
  createOne,
  editForm,
  showOne,
  updateOne,
  deleteOne,
};
