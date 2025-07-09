const mongoose=require("mongoose");
require("dotenv").config();

function DataBaseConnect(){

try{
mongoose.connect(process.env.DATABASE_URL,{}).then(()=>{
    console.log("Database connection is satblished");
}).catch((error)=>{
    console.log("DataBase connection is failed");
})

}

catch(error){
    console.log("we are getting a error", error);
    
}
}
module.exports=DataBaseConnect;