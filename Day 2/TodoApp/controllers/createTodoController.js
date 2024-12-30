// todo object bna ke insert krenge database me

// import todo schema from model
const Todo = require("../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    //extract title and des from request body
    const { title, description } = req.body;

    // create a new Todo Obj and insert in DB
    const dataOfResponse = await Todo.create({ title, description });

    // send a json response with a success flag
    res.status(200).json({
      // 200 ka mtlb kya h??
      success: true,
      data: dataOfResponse,
      message: "Entry created Successfully",
    });
  } catch (e) {
    console.error(e);
    console.log(e);
    res.status(500).json({
      // 500??
      success: false,
      data: "internal server error",
      message: e.message,
    });
  }
};
