// import model
const Todo = require("../models/todoModel");

// define Route handler

// mongoose library hme bhoot se fun provide krti h like create, findone, findbyid findbyid and update]
exports.getTodo = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({}); // Todo->model hai, await iss liye likha h kyuki hm database se interaction kr rhe h
    // find({}) --> means sare todo items database se le aao
    // response
    // This response tells the client that the request was successful (200), provides all the fetched todo data in data,
    //  and includes a success flag and message for better clarity.
    // Sets the HTTP status code to 200, which indicates a successful request.
    res.status(200).json({
      success: true, // its means sbkuchh ekdm smooth chLa hai
      data: todos, // todos->jisme hmne sara data todo ka fetch kiya h
      message: "Entire Todo Data is fetched",
    });
  } catch (err) {
    console.error(err);
    res
      .status(500) // Sets the HTTP status code to 500, which indicates a server error
      // Sends a JSON response to the client, providing details about the error.
      .json({
        success: false, // Indicates that the operation failed. It acts as a flag for the client to understand that something went wrong.
        error: err.message,
        message: "server Error",
      });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract todo items on basis of id
    const id = req.params.id; // If  request's URL. is /todos/12345, req.params.id will hold the value 12345.
    const todo = await Todo.findById({ _id: id }); //Todo.findById searches the database for a document where _id equals the provided ID.

    // If no document with _id: id is found, todo will be null.
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with given ID",
      });
    }
    // If the database contains a document with _id: id, the todo variable will hold that document.
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo ${id} data successfully fetched`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server Error",
    });
  }
};
