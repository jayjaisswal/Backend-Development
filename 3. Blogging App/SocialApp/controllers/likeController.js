//  import models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// Like a post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    // update the post collection basis on this
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();
    res.status(200).json({
      Post: updatedPost,
    });
  } catch (error) {
    console.error("Error while Liking the Post:", error.message);
    return res.status(500).json({
      error: "Error while Post like",
    });
  }
};

// Unlike a post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete the like collection me se
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });  // jis bhi object me postid and likeid match hogi use delete kr dnge

    // update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } }, // like ke andr iss deletedLike._id ko delete kr rha hu(ye post ka likes hh)
      { new: true }
    );
    return res.status(200).json({
      Posts: updatedPost,
    });
  } catch (error) {
    console.error("Error while Unliking Post:", error.message);
    return res.status(500).json({
      error: "Error while Unliking Post",
    });
  }
};
