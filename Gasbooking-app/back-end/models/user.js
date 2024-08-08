const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password: {type:String, required: true},
    address: {type: String,required:true},
    contact:{type: String, required:true},
    state:{type: String, required:true},
    zip:{type:String, required:true},
},
{ timestamps: true}
);

module.exports = mongoose.model("user",userSchema);