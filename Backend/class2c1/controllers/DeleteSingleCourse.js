const course=require("../modals/Cousre.js")
async  function DeleteSingleCouse(req,res){
 try {
        const { id } = req.params
      
        const response = await Course.findByIdAndDelete(id);
        console.log(response)
        console.log("course name", response.couserName)
        res.status(201).json({
            message: "Course deleted successfully",
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


module.exports=DeleteSingleCouse;