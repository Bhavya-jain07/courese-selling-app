const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId,
    ref:"User"},
    courseId : {
    type : mongoose.Schema.Types.ObjectId,
    ref:"Course"}
})
 

const purchaseModel = mongoose.model("Purchase", purchaseSchema);
module.exports = purchaseModel;