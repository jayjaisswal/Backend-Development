const express = require("express");
const router = express.Router();

// import Controller
const {dummyLink} = require("../controllers/dummyController");

// mapping controller
router.get("/",dummyLink )


// export

// Example route


module.exports = router;