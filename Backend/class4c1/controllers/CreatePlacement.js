const Placement=require("../modals/Placement.js")

async function CreatePlacement(req, res) {  

    try {
        const { companyName,companyLocation,companyCTC } = req.body;
 console.log("HERE DATA",companyName,companyLocation,companyCTC);
 if(companyName==="" && companyLocation===""){
    return res.status(201).json({
        message:"Value can't be empty"
    })
 }
        const myPlacement = await Placement.create({ companyName,companyLocation,companyCTC });
        res.status(201).json({
            message: "PLACEMENT Created Successfully",
            date: myPlacement
        })

    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server error",
            success: false
        })
    }

}
module.exports = CreatePlacement;
