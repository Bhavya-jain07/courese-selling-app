const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title : String,
  description: String,
  price: Number,
  imageurl: String,
  creatorID :mongoose.Types.ObjectId
});

const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;