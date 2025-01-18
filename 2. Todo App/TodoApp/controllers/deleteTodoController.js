const Todo = require("../models/todoModel"); // Importing Todo model

// Declaring an asynchronous function
exports.deleteTodo = async (req, res) => {
  
  try {
    const { id } = req.params; // Extracting the id from URL parameters

    // Asynchronous operation to find and delete the Todo by its id
    const deletedTodo = await Todo.findByIdAndDelete(id);

    // If no Todo was found with the given id, return a 404 response
    if (!deletedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    // If the Todo was successfully deleted, send a success message
    res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (e) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server Error",
    });
  }
};
