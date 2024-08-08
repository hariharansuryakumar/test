const mongoose = require("mongoose");
const ratingSchema = new mongoose.Schema({
    user:{ type:mongoose.Schema.Types.ObjectId, red:"User" },
    type: {type:mongoose.Schema.Types.ObjectId, ref:"Type"},
    rating:{type: String, required: true, min:1, max: 5},
},
{ timestamps:true}
);

module.exports = mongoose.model("rating",ratingSchema);