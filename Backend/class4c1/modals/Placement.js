
const mongoose = require("mongoose");
const placementSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    companyLocation: { type: String, maxlength:50},
    companyCTC: { type: Number, required: true },
})

module.exports=mongoose.model("Placement",placementSchema);