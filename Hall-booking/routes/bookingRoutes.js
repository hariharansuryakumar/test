const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const Room = require("../models/Room");

//Booking a room
router.post("/book/:roomId", async (req, res) => {
  const { customerName, date, startTime, endTime } = req.body;
  const { roomId } = req.params;
  try {
    const room = await Room.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found!" });
    const booking = new Booking({
      customerName,
      date,
      startTime,
      endTime,
      roomId,
    });
    await booking.save();

    room.bookings.push(booking._id);
    await room.save();

    res.send(booking);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//Listing all customers with booked data
router.get("/getAllCustomers", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("roomId");
    const customerBookings = bookings.map((booking) => ({
      customerName: booking.customerName,
      RoomName: booking.roomId.name,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    }));
    res.json(customerBookings);
  } catch (error) {
    res.status(404).json({
      message: `Error while retrieving all customers with booked data - ${error}`,
    });
  }
});

//Listing how many times a customer has booked the room with booked data
router.get("/customer/:customerName", async (req, res) => {
  try {
    const { customerName } = req.params;
    const bookings = await Booking.find();
    const customerBookings = bookings.filter(
      (booking) => booking.customerName === customerName
    );
    res.json({
      count: customerBookings.length,
      Bookings: customerBookings,
    });
  } catch (error) {
    res.status(404).json({
      message: `Error while retrieving a customer booking data - ${error}`,
    });
  }
});
module.exports = router;