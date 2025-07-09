const mongoose=require("mongoose");
const studentSchema=new mongoose.Schema({

studentName:{type:"String",maxlength:50},
studentAge:{type:"number",maxlength:50},
studentDiscription:{type:"string",maxlength:50}
});

module.exports=mongoose.model("student", studentSchema);
