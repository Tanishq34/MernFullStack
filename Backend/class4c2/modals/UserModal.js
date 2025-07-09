
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName:{type:String,required:true},
    userAge:{type:Number,required:true},
    userEmail: { type: String, required: true},
    password: { type: String, required: true }
})

module.exports=mongoose.model("UserSchema",UserSchema);