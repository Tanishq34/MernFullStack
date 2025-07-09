const express=require("express");
const router=express.Router();
const CreateUser=require("../controllers/CreateUser.js");
const DeleteUser=require("../controllers/DeleteUser.js");
const LoginController=require("../controllers/UserLogin.js")


router.post("/create-user",CreateUser);
router.delete("/delete-user/:id",DeleteUser);
router.get("/login-user",LoginController);
module.exports=router;