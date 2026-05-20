const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    userId: mongoose.Types.objectId,
    courseId : mongoose.Types.objectId
})
 

const purchaseModel = mongoose.model("purchase", purchaseSchema);
module.exports = purchaseModel;