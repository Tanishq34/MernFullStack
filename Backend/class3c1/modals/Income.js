const mongoose=require("mongoose");
const incomeSchema=new mongoose.Schema({

income:{type:"number"},
incomeDepartment:{type:"string",maxlength:50},

});

module.exports=mongoose.model("income", incomeSchema);
