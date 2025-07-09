const Placement=require("../modals/Placement.js");

async function DeletePlacement(req,res){
try{
    const {id}=req.params;
    const DeletePlacement= await Placement.findByIdAndDelete({_id:id});
    res.status(201).json({
        message:"Delete Placement succesfully",
        data:DeletePlacement
    })
     
}
catch(error){
    console.log("error",error);
    res.status(401).json({
        message:"Something went wroung"
    })
}
}
module.exports=DeletePlacement;