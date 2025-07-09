const express=require("express")
const router=express.Router()
const Login=require("../controllers/Login.js")
const SignUP=require("../controllers/SignUp.js")
const EnrollRoute=require("../controllers/EnrollCourse.js")
const CreateCourse=require("../controllers/CreateCourses.js")
const UserMiddleware=require("../middlewares/VerifyUser.js")

router.get("/log-in",UserMiddleware,Login)
router.post("/sign-up",SignUP);
router.get("/all-enroll-courses",EnrollRoute)
router.get("/create-course",CreateCourse)
module.exports=router;
