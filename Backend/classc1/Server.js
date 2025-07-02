const express=require("express");
const app=express();
const port=7777;
app.listen(port,(req,res)=>{
    console.log(`${port}`);
});
app.get("/",(req,res)=>{
    res.send("<h1>Hello tanu</h1>");
})

