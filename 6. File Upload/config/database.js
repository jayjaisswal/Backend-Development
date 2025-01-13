const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .Connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Database Connection issue");
      console.error(error);
      process.exit(1);
    });
};
