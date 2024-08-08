const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

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

module.exports = router;

