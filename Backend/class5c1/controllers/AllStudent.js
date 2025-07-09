
const User = require("../modals/User.js");
const bcrypt = require("bcrypt")
async function AllStudent(request, response) {
    try {
        console.log("AllAtudent");
        const isExist = await User.find();
    return response.status(200).json({
        message:"allstudent",
        data:isExist
    })
      
    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Internal Server Errror",
            success: false,
        })
    }
}
module.exports = AllStudent;