// import
const mongoose = new require("mongoose");

// route handler
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true
    },
    likes:[{
        type: mongoose.Schema.type.ObjectId,
        ref:"Like",
    }],
    comments:[{
        type: mongoose.Schema.type.ObjectId,
        ref:"comment",
    }]
});

// export
module.exports = mongoose.model("Post", postSchema);