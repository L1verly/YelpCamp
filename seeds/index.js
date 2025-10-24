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
      title: `${sample(descriptors)} ${sample(places)}`,
      price: (Math.random() * 20 + 10).toFixed(2),
      description: "A wonderful place to camp with beautiful scenery.",
      location: `${cities[random90].name}, ${cities[random90].state_name}`,
    });
    await campground.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
