const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

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

// ..............................................................................................................................

// imageupload handler

function isFileTypeSupported(type, supportedType) {
  return supportedType.includes(type); // The .includes() method is used to determine if a given value exists in an array.
  //  syntax : array.includes(value)
}

async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  console.log("temp file path", file.tempFilePath);
  return await cloudinary.uploader.upload(file.tempFilePath, options); // but why photo name changes
}

exports.imageUpload = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile; // imageFile is the key can have any name
    console.log(file); // req.files: Represents the collection of files uploaded by the client in a multipart/form-data request.

    // validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("fileType", fileType);

    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File Format is not supported",
      });
    }

    // file formated is supported
    console.log("Uploading to cloudinary folder");
    const response = await uploadFileToCloudinary(file, "fileNameinCloudinary");
    console.log(response);
    // creating data in db
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

// videoupload handler

function isFileTypeSupported(type, supportedType) {
  return supportedType.includes(type); // The .includes() method is used to determine if a given value exists in an array.
  //  syntax : array.includes(value)
}

async function uploadFileToCloudinary(file, folder) {
  const options = { folder };
  console.log("temp file path", file.tempFilePath);
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options); // but why photo name changes
}

exports.videoupload = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.videoFile; // imageFile is the key can have any name
    console.log(file); // req.files: Represents the collection of files uploaded by the client in a multipart/form-data request.

    // validation
    const supportedType = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("fileType :", fileType);

    // add a upper limit of 5mb for video
    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File Format is not supported",
      });
    }

    // file formated is supported
    console.log("Uploading to cloudinary folder");
    const response = await uploadFileToCloudinary(file, "fileNameinCloudinary");
    console.log(response);
    // creating data in db
    const fileData = await File.create({
      name,
      tags,
      email,
      videoUrl: response.secure_url,
    });

    res.json({
      success: true,
      videoUrl: response.secure_url,
      message: "Video Successfully Uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};

// imageReducer handler

function isFileTypeSupported(type, supportedType) {
  return supportedType.includes(type); // The .includes() method is used to determine if a given value exists in an array.
  //  syntax : array.includes(value)
}

// to reduce quality i will add quality para
async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  console.log("temp file path", file.tempFilePath);

  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options); // but why photo name changes
}

exports.imageReducer = async (req, res) => {
  try {
    // data fetch
    const { name, tags, email } = req.body;
    console.log(name, tags, email);

    const file = req.files.imageFile; // imageFile is the key can have any name
    console.log(file); // req.files: Represents the collection of files uploaded by the client in a multipart/form-data request.

    // validation
    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();
    console.log("fileType", fileType);

    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "File Format is not supported",
      });
    }

    // file formated is supported
    console.log("Uploading to cloudinary folder");
    const response = await uploadFileToCloudinary(
      file,
      "fileNameinCloudinary",
      90
    );
    console.log(response);
    // creating data in db
    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
      imageUrl: response.secure_url,
      message: "Image Successfully Uploaded",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went Wrong",
    });
  }
};


