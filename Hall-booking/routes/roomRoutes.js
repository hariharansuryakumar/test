const express = require("express");
const router = express.Router();
const Room = require("../models/Room");

//Creating a room
router.post("/create", async (req, res) => {
  const { name, numberOfSeats, amenities, pricePerHour } = req.body;
  try {
    const room = new Room({ name, numberOfSeats, amenities, pricePerHour });
    await room.save();
    res.send(room);
  } catch (error) {
    res.send("Error while creating room - ", error);
  }
});

//Listing all rooms with booked data
router.get("/getRoomsWithBookedData", async (req, res) => {
  try {
    const rooms = await Room.find().populate("bookings");
    const roomList = rooms.map((room) => ({
      roomName: room.name,
      bookedStatus: room.bookings.length > 0,
      bookings: room.bookings.map((booking) => ({
        customerName: booking.customerName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
      })),
    }));
    res.json(roomList);
  } catch (error) {
    res.status(404).json({message :"Error while retrieving room - ",error})
  }
});


module.exports = router;