const express = require("express");
const router = express.Router();

// import controller
const { createTodo } = require("../controllers/createTodo"); //http://localhost:3000/api/v1/createTodos

// getTodo, getTodoById y dono ek hii file me h iss liye import ek me hiii kr liye
const { getTodo, getTodoById } = require("../controllers/getTodo"); //http://localhost:3000/api/v1/getTodos
// http://localhost:3000/api/v1/getTodos/676e69033ce3190306514aea

const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
// define API routes
router.post("/createTodos", createTodo);
router.get("/getTodos", getTodo);
router.put("/updateTodos/:id", updateTodo);
router.delete("/deleteTodos/:id", deleteTodo);

module.exports = router;
