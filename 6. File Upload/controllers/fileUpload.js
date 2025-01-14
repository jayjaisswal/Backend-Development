const File = require("../models/File");

// localFileUpload handler

exports.localFileUpload = async (req, res) => {
  try {
    // fetch file

    const file = req.files.file; //  files-->directory name and .file this is what we send using postman
    console.log("File ka data dekho jee :", file);

    // path where file will store
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    console.log("Path :", path);

    file.mv(path, (err) => {
      // file.mv(path, callback): Moves the file to the given path.
      console.log(err); // Error Handling: The callback function checks for errors during the move.
    });

    res.json({
      status: true,
      message: "Local file Uploaded successfully",
    });
  } catch (error) {
    console.log("Not able to upload the file on server");
    console.log(error);
  }
};
