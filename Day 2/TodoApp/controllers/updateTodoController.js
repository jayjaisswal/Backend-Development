const Todo = require("../models/todoModel");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params; // another way Extracts the id property from req.params and assigns it to the variable id.
    const { title, description } = req.body; //Extracts the title and description properties from the req.body object and assigns them to the variables title and description.

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: `Updated Successfully ${title}`,
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
