const cousre=require("../modals/Cousre.js")
async  function CreateCourse(req,res){
try{
    const {CourseName,CourseDuration,CourseAuthor,CourseRating}=req.body
    const res1= await cousre.create({CourseName,CourseDuration,CourseAuthor,CourseRating})
     res1.status(201).json({
        message:"CourseCreate",
        data:res1
     });
}
    catch(error){
        console.log("found error",error);
        
    }
}
module.exports=CreateCourse;