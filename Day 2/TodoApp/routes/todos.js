const express = require("express"); 
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");

// define API routes
router.post("/createTodos",createTodo );
module.exports = router;
