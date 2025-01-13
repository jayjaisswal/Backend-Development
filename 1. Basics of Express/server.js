// step 1:  npm init -y
// step 2:  npm i express
// step 3:  create server.js

// server instantiate
const express = require("express");
const app = express();

// used to parse req.body in express  --> PUT or POST
const bodyParser = require("body-parser");

// specifically parse JSON data & add it to the request.body object
app.use(bodyParser.json());

// activate the server on 3000 port
app.listen(3000, () => {
  console.log("Server Started at port no. 3000");
});

app.get("/", (req, res) => {
  res.send("hello jee, kaise ho");
});

// Post method hai jo client request krega server se
app.post("/car/ka/route", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car request successfully Sybmitted");
});

// Database Connection ka code
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase")

  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Received Database Connection Error: ", error.message);
  });
