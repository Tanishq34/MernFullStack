const course=require("../modals/Cousre.js")
async  function AllCourses(req,res){
    try {

        console.log("hey get")
        const response = await Course.find({});
        res.status(201).json({
            message: "single course fetched successfully",
            data: response
        })

    }
    catch (error) {
        console.log("we are getting an error ", error);
        res.status(500).json({
            message: "Something has wrongs",
            error: error
        })
    }
}

module.exports=AllCourses;