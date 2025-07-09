const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    fName: { type: String, maxlength: 25 },
    lName: { type: String },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    VerifyUser: { type: Boolean, default: false },
    role: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student'
    }
})
module.exports = mongoose.model("Student", studentSchema);