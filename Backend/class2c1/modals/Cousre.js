const mongoose=require("mongoose")
const CourseSchema=new mongoose.Schema({
  CourseName:{type:"string",required:true}  ,
    CourseDuration:{type:"number",required:true}, 
      CourseAuthor:{type:"string",required:true} ,
        CourseRating:{type:"number",required:true} 
})
module.exports=mongoose.model("cousre",CourseSchema);