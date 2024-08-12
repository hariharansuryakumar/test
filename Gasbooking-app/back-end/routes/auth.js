const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();
const Slot = require('../models/Slot');
const Booking = require('./models/Booking');

// >>>>>Register<<<<<
router.post('/register', async (req, res) => {
    try{
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({username, email, password: hashPassword});
    await newUser.save();
    res.json({message: "User registered"});
    } catch (error) {
        res.json({message: error.message});
    }
});

// >>>>LOGIN<<<<
router.post('/login', async (req, res) => {
    try{
    const { email, password } = req.body;
    const user = await User.findOne ({ email});
    if (!User || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({message: "Invalid credentials"});
    }
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET,{
            expiresIn: "1hr",
        });
    res.json({token});
    } catch (error) {
        res.json({message: error.message});
    }
});




// Create Slot
router.post('/slots', async (req, res) => {
    const { date, time } = req.body;
    const slot = new Slot({ date, time });
    await slot.save();
    res.status(201).send(slot);
});

// Get Available Slots
router.get('/slots', async (req, res) => {
    const slots = await Slot.find({ isBooked: false });
    res.send(slots);
});

// Book Slot
router.post('/bookings', async (req, res) => {
    const { userId, slotId } = req.body;
    const slot = await Slot.findById(slotId);
    if (!slot || slot.isBooked) return res.status(400).send('Slot is unavailable');
    
    slot.isBooked = true;
    await slot.save();

    const booking = new Booking({ user: userId, slot: slotId });
    await booking.save();
    res.status(201).send(booking);
});




module.exports = router;

