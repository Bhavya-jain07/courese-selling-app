const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    userId: objectId,
    courseId : objectId
})
 

const purchaseModel = mongoose.model("user", purchaseSchema);
module.exports = purchaseModel;