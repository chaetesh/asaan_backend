const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  content: String,
  likes: Number,
  category: String,
});

// We are exporting the model, we are compiling Schema into model.
// A model is a class with which we construct documents.
module.exports = mongoose.model("post", PostSchema);
