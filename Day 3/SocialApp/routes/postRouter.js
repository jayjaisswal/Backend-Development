const express = require("express");
const router = express.Router();

// import Controller
const { dummyLink } = require("../controllers/dummyController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPosts } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");

// mapping controller
router.get("/dummyLink", dummyLink); //http://localhost:3000/api/v1/dummyLink
router.post("/comments/create", createComment); //http://localhost:3000/api/v1/comments/create
router.post("/posts/create", createPost); // http://localhost:3000/api/v1/posts/create
router.get("/posts", getAllPosts); //http://localhost:3000/api/v1/posts
router.post("/like/post", likePost); //http://localhost:3000/api/v1/like/post
router.post("/unlike/post", unlikePost); //http://localhost:3000/api/v1/unlike/post

// export

// Example route

module.exports = router;
