const joi = require("joi");
const campgroundSchema = joi.object({
  campground: joi
    .object({
      title: joi.string().required(),
      images: joi
        .object({
          url: joi.string(),
          filename: joi.string(),
        })
        .required(),
      price: joi.number().required().min(0),
      description: joi.string().required(),
      location: joi.string().required(),
    })
    .required(),
});

module.exports.campgroundSchema = campgroundSchema;

module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required().min(1).max(5),
      body: joi.string().required(),
    })
    .required(),
});
