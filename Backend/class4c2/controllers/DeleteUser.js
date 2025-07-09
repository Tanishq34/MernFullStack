const UserSchema=require("../modals/UserModal.js");

async function DeleteUser(req,res) {
    try{
const {id}=req.params;
const DeleteUser=await UserSchema.findByIdAndDelete({_id:id});
res.status(201).json({
    message:"Success fully Deleted",
    data:DeleteUser
})
    }
catch(error){
    console.log("error",error);
    
    res.status(401).json({
        message:"Found some error"
    })
}
}
module.exports=DeleteUser;