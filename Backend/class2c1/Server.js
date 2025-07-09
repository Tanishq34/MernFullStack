// step-1
const express=require("express");
const CourseRoute=require("./routes/CourseRoute.js")
const DataBaseConnect=require("./config/DataBaseConnect.js")
// step-2 instance
const app=express();
// step-3 server to start karunga

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})
// step-4 me UI me verfy krna ke
app.get("/",(req,res)=>{
    res.send("<h1>hello dosto</h1>")
});

// step-5 Data BAse connection
DataBaseConnect();
// step-6 call here routes
app.use("/api/course/v1",CourseRoute)

// step-7 for getting the data from the body u have to use middle ware
app.json()