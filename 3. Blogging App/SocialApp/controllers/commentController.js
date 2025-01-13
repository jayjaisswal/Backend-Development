// Step 1 --> import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// step 2 --> Business Logic
exports.createComment = async (req, res) => {
  try {
    // 1st way to create entry in DB is using create method
    // here we learn alternate/another method called save .

    // fetch data from req. body
    
    const { post, user, body } = req.body;

    // create comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new comment into the database
    const savedComment = await comment.save();

    // find the post by Id, add the new comment ti its comments array
    // updatedPost <--iss me {new: true}--> ishke karan updated wali document aayegi jisme comments: array me ye id savedComment._id hogi
    // {new: true} nhi likhne se purane wali hii document reh jati
    // $push --> use to update
    // $pull --> use to delete
    // post it has 4 parameters jisme hm bs comments wale array ke andr nai id insert kr rha hu
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments") // populate means jo id maine fetch kiya h iss array me wo nhi pura document hii chahiye
      .exec();
    return res.status(200).json({
      post: updatedPost,
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    return res.status(500).json({
      error: "Error While Creating comment",
    });
  }
};
