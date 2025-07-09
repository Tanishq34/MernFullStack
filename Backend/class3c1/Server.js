const express=require("express");
require("dotenv").config()
const DataBaseConnect=require("./config/DataBaseConnect.js");
const studentRoute=require("./routes/StudentRoute.js")

const app=express();
const Port=process.env.PORT
app.listen(Port,()=>{
console.log(`server is running at ${Port}`);

});
app.get("/",(req,res)=>{
res.send("chal gya")
});

// db connection
// const DataBaseConnect=require("./config/DataBaseConnect.js");
DataBaseConnect();

// middleware
app.use(express.json());

// link karo routes
// const student=require("./routes/Student.js")
app.use("/student",studentRoute);

app.get("/",(req,res)=>{
    res.send("chal gaya dosto")
})