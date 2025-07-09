const Student = require("../modals/Student.js");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken")
async function Login(req, res) {
    try {
        console.log("Login success")
        const { Email, Password } = req.body;
        let isUserExist = await Student.findOne({ Email })
        if (isUserExist === null || isUserExist === undefined) {
            return res.status(200).json({
                message: `this email already exist ${Email}`,
                success: false
            })
        }

        if (await bcrypt.compare(Password, isUserExist.Password)) {
            const payload = {
                id: isUserExist._id,
                role: isUserExist.role,
                Email: isUserExist.Email
            }
            const token = jwt.sign(payload, process.env.JWT, { expiresIn: "100s" });
            isUserExist=isUserExist.toObject()
            isUserExist.token = token;
            isUserExist.Password = null,
                res.cookie("session", token).status(200).json({
                    message: "user login successfully",
                    data: isUserExist,
                    success: true
                })
        }

        else {
            return res.status(200).json({
                message: "plese enter correct answer",
                success: false
            })
        }

    }
    catch (error) {
        console.log(error, "ye rhi bhaiya");
        return res.status(500).json({
            message: "internal server error"
        });
    }
}

module.exports = Login;