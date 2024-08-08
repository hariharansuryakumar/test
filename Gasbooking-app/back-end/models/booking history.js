const mongoose = require("mongoose");
const bookingHistorySchema = new mongoose.Schema({
    model:{type:String, required: true},
    describtion:{type:string, required: true},
    category: String,
    images:[String],
    user:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    comments:[{type:mongoose.Schema.Types.ObjectId, ref:"comment"}],
    ratings:[{type:mongoose.Schema.Types.ObjectId, ref:"rating"}],
 

},
{ timestamps: true}
);

module.exports = mongoose.model("type",typeSchema);

