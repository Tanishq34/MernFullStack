const express=require("express");
require("dotenv").config();
const DatabaseConnection=require("./config/Databaseconnection.js");
const UserRoute=require("./routes/UserRoute.js")
const app=express();

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
    
});
DatabaseConnection();
app.get("/",(req,res)=>{
    res.send("chal rha hai")
})
app.use(express.json());

app.use("/enter/in/user",UserRoute);

