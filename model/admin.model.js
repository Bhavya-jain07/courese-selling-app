const mongoose = require("mongoose");
const objectId = mongoose.Types.objectId;
const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  firstname: String,
  lastname: String
});

const adminModel = mongoose.model("user", adminSchema);
module.exports = adminModel;