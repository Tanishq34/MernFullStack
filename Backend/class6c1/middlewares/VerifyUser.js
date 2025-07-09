function VerifyUser(req,res,next){
try{
const token=req.bo;
console.log("token",token);
if(!token){
    return res.status(400).json({
        message:"taken not found",
        success:false
    })
}
next();
}

catch(error){
    console.log("found error",error);
    return res.status(404).json({

    })
    
}

}

module.exports=VerifyUser;