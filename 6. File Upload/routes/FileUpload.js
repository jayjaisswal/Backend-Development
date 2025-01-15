// creating instance of router
const express = require("express");
const router = express.Router();

// importing router handling from controller
const { localFileUpload, imageUpload , videoupload, imageReducer} = require("../controllers/fileUpload");

// Api route
router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoupload", videoupload);
router.post("/imageReducer", imageReducer);

// export
module.exports = router;
