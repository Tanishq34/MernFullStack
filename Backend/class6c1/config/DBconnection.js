const mongoose=require("mongoose");
require("dotenv").config()
function DBconnect(){
    mongoose.connect(process.env.DB,{}).
    then(res=>console.log("db Connected successfuly")).catch(error=>console.log("device not connectrd"));
    
}
module.exports=DBconnect;