const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);

// resting protected route for single middleware
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to protected route for TEST ",
  });
});

// protected route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to protected route for students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to protected route for Admin",
  });
});

module.exports = router;
