const express = require("express");
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json req. body
app.use(express.json());

// import routes for Post  API
const Routes = require("./routes/postRouter");

// mount the postRoutes API routes
app.use("/api/v1", Routes);

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// start server
app.listen(PORT, () => {
  console.log(`server Started successfully at ${PORT}`);
});

// default route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPGE baby </h1>`);
});
