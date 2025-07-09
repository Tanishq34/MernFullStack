
const mongoose = require("mongoose");
require("dotenv").config();
function DataBaseConnection() {
    try {
        mongoose.connect(process.env.DATABASE,{}).then(ip => console.log("Db connected successfully")).
            catch((error) => {
                console.log("Error while connecting with db");
                throw ("failed due to some network issue ")
            })
    }
    catch (error) {
        console.log("Database connection failed")
    }
}
module.exports=DataBaseConnection;
