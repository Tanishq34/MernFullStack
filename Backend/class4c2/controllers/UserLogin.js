// const UserSchema = require("../modals/UserModal.js");
// const bcrypt = require("bcrypt");
// async function UserLogin(req,res) {

//     try {
//         console.log("Login");
        
//         const { userEmail, password } = req.body;
//         console.log("Email,Password", userEmail, password);

//         if (userEmail === "" && password === "") {
//             return res.status(201).json({
//                 message: " email and password Value can't be empty"
//             })
//         }
// // check kr lo ye jo emial aai h db me h ya nhi 
// const isExist= await UserSchema.findOne({userEmail});
// console.log("found user data",isExist);

// if(!isExist){
// return res.status(201).json({
//     message:" user Email nhi h ye"
// })
// }
// // matlab user mil gya hai password compare kar lo
// // console.log(await bcrypt.compare(password,isExist.password))

// if(await bcrypt.compare(password,isExist.password)){
// return res.status(200).json({
//     message:"user login successfully",
//     data:isExist
// })
// }
// else{
//     res.status(400).json({
//         message:"bhai password galat hai",
// success: false
//     })
// }
// }
//     catch (error) {
//         console.log(error)
//         res.status(500).json({
//             message: "Internal Server error",
//             success: false
//         })
//     }

// }
// module.exports = UserLogin;


const UserSchema = require("../modals/UserModal.js");
const bcrypt = require("bcrypt")
async function LoginController(request, response) {
    try {
        console.log("Login")
        //step-1 data nikal leaya 
        const { userEmail, password } = request.body;
        console.log("email, password", userEmail, password);

        //step-2 validations
        if (userEmail === "" && password === "") {
            return response.status(201).json({
                message: "email and password empty nhi ho sakte hai ",
            })
        }


        // step-3 check kar lo jo ye email aai db me hai ya nhi 
        const isExist = await UserSchema.findOne({ userEmail });
        console.log("Found user data", isExist)

        if (!isExist) {
            return response.status(201).json({
                message: "User nhi hai hamari website me",
            })
        }
        //step- matalb user mil gya hai password comapre kar lo
        console.log("ghjkld ",await bcrypt.compare(password, isExist.password))
        if (await bcrypt.compare(password, isExist.password)) {
            return response.status(200).json({
                message: "User login successfully",
                data: isExist
            })
        }
        else {
            response.status(400).json({
                message: "Bhai password to shi dalo ",
                success: false
            })

        }
    }
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Internal Server Errror",
            success: false,
        })
    }
}
module.exports = LoginController;