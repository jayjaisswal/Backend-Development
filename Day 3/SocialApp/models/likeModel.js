// import mongoose 
const mongoose = require("mongoose");


// route handler
const likeSchema = new mongoose.Schema({
    post:{  // kon se post ko like kiya h
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    // kis user ne like kiya h
    user:{
        type: String,
        required: true,
    },

});




// export
module.exports=mongoose.model("Like",likeSchema );