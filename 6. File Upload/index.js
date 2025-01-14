// app create
const express = require("express");
const app = express();

// Port find Out
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware addition
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// DB connect
const db = require("./config/database");
db.connect();

// cloud connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// Api route mount
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

// activate server
app.listen(PORT, () => {
  console.log(`App is Running at ${PORT}`);
});
