const mongoose = require("mongoose");

require("dotenv").config(); // ishka mtlb jo bhi app .env me define kiya h wo sb process object me load ho jayega

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connection Successful");
    })
    .catch((error) => {
      console.log("Received Database Connection Error: ", error.message);
      process.exit(1);
    });
};

module.exports = dbConnect