const mongoose=require("mongoose");
const courseSchema=new mongoose.Schema({

CourseName:{type:"String",required:true,maxlength:50},
CourseDuration:{type:"number",required:true,maxlength:50},
CourseIncome:{type:"number",required:true,maxlength:50}
});

module.exports=mongoose.model("course", courseSchema);
