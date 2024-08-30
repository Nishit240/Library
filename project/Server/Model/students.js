const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb7");

//http://localhost:4000/api/students/add?_id=101&name=abc&deptName=cse

var schema=mongoose.Schema({
    _id:String,
    name:String,
    deptName:String
});

var Students=mongoose.model("student", schema);

module.exports=Students;