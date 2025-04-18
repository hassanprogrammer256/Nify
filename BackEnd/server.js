const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");

const database = process.env.MONGODB_URI

mongoose
  .connect(database)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// app.use(
//   cors({
//     origin:process.env.FRONTEND_URL,
//     methods: ["GET", "POST", "DELETE", "PUT","OPTIONS"],
//     credentials: true,
//   })
// );




app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));