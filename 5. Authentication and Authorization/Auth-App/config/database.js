const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
    //   useNewUrlParser: true, useNewUrlParser has no effect since Node.js Driver version 4.0.0 and will be removed in the next major version
    //   useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((error) => {
      console.log("DB Connection issue");
      console.error(error);
      process.exit(1);
    });
};
