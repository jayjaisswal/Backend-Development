// hm log model me schema mtlb ki structure define kr rhe h
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true, //ishka mtlb chahiye hii chahiye
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
    maxLength:50,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", todoSchema); // koi bhi use kr skta h ise Todo ke naam se
