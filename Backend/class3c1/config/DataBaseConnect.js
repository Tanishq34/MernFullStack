const mongoose=require("mongoose");
require("dotenv").config()

function DataBaseConnect(){
mongoose.connect(process.env.DBURl,{}).then(res=>console.log("DataBase Connection done")).catch(e=>console.log("erroe",e));

}
module.exports=DataBaseConnect;