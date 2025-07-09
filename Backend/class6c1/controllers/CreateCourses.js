function CreateCourses(req,res){
try{
    const courseData = {
  courses: [
    {
      name: "JavaScript for Beginners",
      price: 49.99,
      author: "John Doe"
    },
    {
      name: "Advanced Python",
      price: 59.99,
      author: "Jane Smith"
    },
    {
      name: "React and Redux",
      price: 69.99,
      author: "Emily Johnson"
    }
  ]
};
return res.json({
    message:"create courses",
    data:courseData,
    success:false
})

}

catch(error){
    console.log("hello ",error);
    res.status(500).json({
        message:"something wenr wrong",
        success:false
    })
}
}
module.exports=CreateCourses;