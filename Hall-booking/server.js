const express = require("express");
const mongoose = require("mongoose");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/apiRoom',roomRoutes);
app.use('/apiBooking',bookingRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log(`Connected to MONGODB`);
    app.listen(PORT, () => {
      console.log(`Server is running on the PORT - ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error in connecting MONGODB - ${err}`);
  });