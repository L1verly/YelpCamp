const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

//DB connection through mongoose ODM
main()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/YelpCampDB");
}

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({}); // Clear existing campgrounds
  for (let i = 0; i < 50; i++) {
    const random90 = Math.floor(Math.random() * 90);
    const campground = new Campground({
      author: "690f46bc7a7819f67c4675cd",
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dqfpbzx88/image/upload/v1762876286/YelpCamp/gjjqntiv7av5xof3tlf2.jpg",
          filename: "YelpCamp/gjjqntiv7av5xof3tlf2",
        },
        {
          url: "https://res.cloudinary.com/dqfpbzx88/image/upload/v1762876287/YelpCamp/shscoinomixqf5b7l9o1.jpg",
          filename: "YelpCamp/shscoinomixqf5b7l9o1",
        },
        {
          url: "https://res.cloudinary.com/dqfpbzx88/image/upload/v1762876287/YelpCamp/sz2dxx8eyadyo7joeth8.jpg",
          filename: "YelpCamp/sz2dxx8eyadyo7joeth8",
        },
      ],
      price: Math.floor(Math.random() * 20) + 10,
      description: "A wonderful place to camp with beautiful scenery.",
      location: `${cities[random90].name}, ${cities[random90].state_name}`,
    });
    await campground.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
