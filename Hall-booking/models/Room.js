const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  numberOfSeats: {
    type: Number,
    required: true,
  },
  amenities: [],
  pricePerHour: {
    type: Number,
    required: true,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookings",
    },
  ],
},{
    timestamps:true,
});

module.exports = mongoose.model("rooms", roomSchema);