const Placement=require("../modals/Placement.js");

async function UpdatePlacement(req,res){
try{
    const {id}=req.params;
    const {companyName}=req.body;
    const Update= await Placement.findByIdAndUpdate(id,{companyName:companyName});
    res.status(201).json({
        message:"get by id succesfully",
        data:Update
    })
     
}
catch(error){
    console.log("error",error);
    res.status(401).json({
        message:"Something went wroung"
    })
}
}
module.exports=UpdatePlacement;