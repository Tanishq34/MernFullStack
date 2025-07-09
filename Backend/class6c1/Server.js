const express=require("express")
require("dotenv").config();
const DBconnect=require("./config/DBconnection.js")
const router=require("./routes/StudentRoute.js")
const app=express();
const PORT=process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

app.use(express.json())
DBconnect();
app.use("/student",router)

app.get ("/",(req,res)=>{
    res.send("This is our home psge")
})

