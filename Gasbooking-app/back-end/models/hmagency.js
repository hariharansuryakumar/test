const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    time: { type: String, required: true },
    isBooked: { type: Boolean, default: false }
});

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    slot: { type: mongoose.Schema.Types.ObjectId, ref: 'Slot', required: true },
    status: { type: String, default: 'Booked' }
});

const Slot = mongoose.model('Slot', slotSchema);
const Booking = mongoose.model('Booking', bookingSchema);