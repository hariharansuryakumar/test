const mongoose = require("mongoose");
const express = require("express");
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// >>>Middleware>>>>
app.use(cors());
app.use(bodyParser.json());

// >>>>ROUTES<<<<
app.use("/apiAuth", authRoutes);

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log("MongoDB connected sucessfully!!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err)=> console.log(err));