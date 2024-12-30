// import mongoose 
const mongoose = require("mongoose");

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        // kon se post pe comment ho rha h ushko id se pta krenge
        type: mongoose.Schema.Types.ObjectId, // post ke id ko store kr rha h
        ref: "Post", // reference to the post model
    },

    // kis user ne commment kiya h
    user:{
        type: String,
        required: true,
    },
    body:{
        type:String,
        required:true,
    }

})




// export
module.exports = mongoose.model("comment", commentSchema);