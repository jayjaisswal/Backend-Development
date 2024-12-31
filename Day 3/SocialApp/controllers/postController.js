const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();

    return res.status(200).json({
      post: savedPost,
    });
  } catch (error) {
    console.error("Error creating Post:", error.message);
    return res.status(500).json({
      error: "Error while creating Post",
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("comments").populate("likes");
    return res.status(200).json({
        Posts :posts,
      });
  } catch (error) {
    console.error("Error while geting Post:", error.message);
    return res.status(500).json({
      error: "Error while getting Post",
    });
  }
};
