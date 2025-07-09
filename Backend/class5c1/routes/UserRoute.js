
const express = require("express");
const router = express.Router();
const CreateUser=require("../controllers/CreateUser.js")
const LoginController=require("../controllers/Login.js")
const Allstudent=require("../controllers/AllStudent.js")
const VerifyUser=require("../middlewares/VerifyUser.js")
const role=require("../middlewares/AllStudent.js")
router.post("/signup", CreateUser);
router.get("/login",LoginController);
router.get("/allstudent",VerifyUser,role,Allstudent);
// router.get("/portal",AllPlacement);
module.exports = router;
