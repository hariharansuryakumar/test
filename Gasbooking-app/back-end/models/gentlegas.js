const mongoose = require('mongoose');

const gasProvidersSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: { type: Date, required: true },
    time: { type: String, required: true },
    bookingHistory : []
});
