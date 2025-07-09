const UserSchema=require("../modals/UserModal.js");
const bcrypt=require("bcrypt");
async function CreateUser(req, res) {  

    try {
        const { fName,lName,userAge, userEmail,password} = req.body;
 console.log("HERE DATA",fName,lName,userAge, userEmail,password);
 if(fName==="" && password===""){
    return res.status(201).json({
        message:"Value can't be empty"
    })
 }
 const isExist= await UserSchema.findOne({userEmail});
if(isExist){
return res.status(201).json({
    message:`this email ${userEmail}is already registered`
})
}
//  hash the password
let encryptPassword;
try{
encryptPassword=await bcrypt.hash(password,10);
}
catch(error){
res.status(401).json({
    message:"Getting an error in encrypting the password",
    success:false
})
}


        const UserDetails = await UserSchema.create({ fName,lName,userAge, userEmail,password:encryptPassword});
        res.status(201).json({
            message: "User Created Successfully",
            date: UserDetails
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
module.exports = CreateUser;
