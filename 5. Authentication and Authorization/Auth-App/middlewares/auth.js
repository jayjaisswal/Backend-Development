// auth, isStudent, isAdmin

const JWT = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    // extract token
    const token = req.body.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token missing",
      });
    }

    //   verify the token
    try {
      const decode = JWT.verify(token, process.env.JWT_SECRET);
      req.user = decode; //payload contain email, id, role
      
    } catch (error) {
        console.error("Token verification error:", error.message);
      return res.status(401).json({
        
        success: false,
        message: "Token is invalid",
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong, while verifying token",
    });
  }
};

// Middleware to check if the user is a Student
exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.status(403).json({
        success: false,
        message: "Access denied. This route is protected for Students only.",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
};

// Middleware to check if the user is an Admin
exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. This route is protected for Admins only.",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
};
