const Placement=require("../modals/Placement.js");

async function GetPlacementById(req,res){
try{
    const {id}=req.params;
    const GetPlacement= await Placement.findById({_id:id});
    res.status(201).json({
        message:"get by id succesfully",
        data:GetPlacement
    })
     
}
catch(error){
    console.log("error",error);
    res.status(401).json({
        message:"Something went wroung"
    })
}
}
module.exports=GetPlacementById;