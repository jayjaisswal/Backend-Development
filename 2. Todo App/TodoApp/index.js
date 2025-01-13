const express = require("express");
const app = express();

// load congif from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json req. body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todosRoutes");

// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`server Started successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPGE baby </h1>`);
});
