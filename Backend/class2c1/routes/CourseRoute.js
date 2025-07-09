const express=require("express");
const CreateCourse=require("../controllers/CreateCourse.js")
const router=express.Router();

router.post("/create-course",CreateCourse);
module.exports=router;