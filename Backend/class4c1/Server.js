const express=require("express");
require("dotenv").config();
const DATABASE=require("./config/DataBase.js");
const PlacementRoute=require("./routes/PlacementRoute.js")
const GetPlacement=require("./controllers/GetPlacement.js")
const GetPlacementById=require("./controllers/GetPlacementById.js")
const app=express();

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
app.get("/",(req,res)=>{
    res.send("CHAL GAYA BHIDU");
})

//middlerware 
app.use(express.json());
DATABASE();

app.use("/placement",PlacementRoute);


