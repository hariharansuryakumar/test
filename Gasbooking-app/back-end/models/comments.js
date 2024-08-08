const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    type:{type:mongoose.Schema.Types.ObjectId, ref:"Receipe"},
    comment:{type: String, required:true},
},
{ timestamps:true}
);

module.exports = mongoose.model("comment",commentSchema);