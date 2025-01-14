// creating instance of router
const express = require("express");
const router = express.Router();

// importing router handling from controller
const { localFileUpload } = require("../controllers/fileUpload");

// Api route
router.post("/localFileUpload", localFileUpload);

// export
module.exports = router;
