const student=require("../modals/Student.js")

 async function CreateStudent(req,res){
    try{
const {studentName,studentAge,studentDiscription}=req.body;

//testing kr lo
if(studentName==="" && studentDiscription===""){
    res.status(400).json({
        message:"studentName and studentDiscription khali nhi ho sakta"
    })
}
// insert record in db
const dbResponse= await student.create({studentName,studentAge,studentDiscription})
res.status(201).json({
    Message:"Student registered succesfully",
    data:dbResponse
})
    }
    catch(error){
console.log("erroe",error);
res.status(500).json({
    message:"internal server is coming"
})

    }
}
module.exports=CreateStudent;