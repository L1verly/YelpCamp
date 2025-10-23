const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Campground = require("./models/campground");

//DB connection through mongoose ODM
main()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/YelpCampDB");
}

//Express app setup
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/newcampground", async (req, res) => {
  const campground = new Campground({
    title: "My Backyard",
    price: 0,
    description: "Cheap camping!",
    location: "NY",
  });
  await campground.save();
  res.send(campground);
});
