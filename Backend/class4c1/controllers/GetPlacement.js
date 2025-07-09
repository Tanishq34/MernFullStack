const Placement = require("../modals/Placement.js");

async function GetPlacement(req, res) {
    try {
        const myPlacement = await Placement.find({});
        res.status(201).json({
            message: "Success get the code",
            data: myPlacement
        })

    }
    catch (error) {
        console.log("error", error)
        res.status(400).json({
            message: "internal Server error"
        })

    }
}
module.exports = GetPlacement;
