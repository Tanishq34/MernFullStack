const mongoose=require("mongoose");
require("dotenv").config();
function DatabaseConnection(){
mongoose.connect(process.env.DATABASE,{}).then(res=>console.log("data base connected")).catch(error=>console.log("data base not connected"));



}

module.exports=DatabaseConnection;