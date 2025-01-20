// import
const mongoose = new require("mongoose");

// route handler
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId, // Stores the unique ID of a "Like".
      ref: "Like", // Refers to the "Like" model to fetch like details.
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, // Stores the unique ID of a "comment".
      ref: "comment",  // Refers to the "comment" model to fetch comment details.
    },
  ],
});

// export
module.exports = mongoose.model("Post", postSchema);
