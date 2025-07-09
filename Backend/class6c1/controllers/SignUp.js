const Student=require("../modals/Student.js");
const bcrypt=require("bcrypt")
async function SignUp(req,res){
try{
const {fName,lName,Email,Password,role}=req.body;
const isUserExist=await Student.findOne({Email})
if(isUserExist){
    return res.status(200).json({
        message:`this email already exist ${Email}`,
        success: false
    })
}
let maskpassword;
try{
maskpassword= await bcrypt.hash(Password,10);
}
catch(error){
     console.log(error, "password encrupt krne me error");
    return res.status(500).json({
        message:"internal serve error",
        success:false
    })
}
const newUser= await Student.create({fName,lName,Email,Password:maskpassword,role})
return res.status(201).json({
    message:"user signup succesfully",
    data:newUser,
    success:true
})
}
catch(error){
    console.log(error, "ye rhi bhaiya");
    return res.status(500).json({
        message:"internal server error"
    })
}
}

module.exports=SignUp;