const Todo = require("../models/todoModel");

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

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
