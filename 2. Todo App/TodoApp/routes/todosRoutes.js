const express = require("express");
const router = express.Router();


// import controller
const { createTodo } = require("../controllers/createTodoController"); 

// getTodo, getTodoById y dono ek hii file me h iss liye import ek me hiii kr liye
const { getTodo, getTodoById } = require("../controllers/getTodoController"); 


const { updateTodo } = require("../controllers/updateTodoController");
const { deleteTodo } = require("../controllers/deleteTodoController");
// define API routes
router.post("/createTodos", createTodo);//http://localhost:3000/api/v1/createTodos
router.get("/getTodos", getTodo);//http://localhost:3000/api/v1/getTodos
router.get("/getTodosbyid", getTodoById);// http://localhost:3000/api/v1/getTodosbyid/676e69033ce3190306514aea
router.put("/updateTodos/:id", updateTodo);// http://localhost:3000/api/v1/updateTodos/676e69033ce3190306514aea
router.delete("/deleteTodos/:id", deleteTodo); //http://localhost:3000/api/v1/deleteTodos/676fa7752dd9970be8588dc8

router.get("/", (req, res) => { // http://localhost:3000/api/v1
    res.send("All Todos");
  });
  
module.exports = router;
