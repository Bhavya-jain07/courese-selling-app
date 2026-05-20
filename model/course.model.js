const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title : String,
  description: String,
  price: Number,
  imageurl: String,
  creatorID :objectId
});

const courseModel = mongoose.model("user", courseSchema);
module.exports = courseModel;