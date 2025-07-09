
const jwt = require("jsonwebtoken");
require("dotenv").config();
async function VerifyUser(request, response,next) {
    try {
     const token=request.body.token;
     if(!token){
        return response.status(404).json({
                message: "Token not found",
                success: false,
            })

        }
        const decodeData=jwt.verify(token,process.env.JWTSECRET);
        console.log("decode data",decodeData);
        if(!decodeData){
            return response.status(404).json({
                message:"token apka sahi nhi h",
                success:false
            })
        }
        request.user=decodeData;
        next();
     }
    
    catch (error) {
        console.log(error)
        return response.status(500).json({
            message: "Token Expired",
            success: false,
        })
    }
}
module.exports = VerifyUser;