var mongoose = require("mongoose");

var articleSchema = new mongoose.Schema({
  title: String,
  image: { type: mongoose.Schema.Types.ObjectId, ref: "Media" },
  body: String,
  date: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  // author: {
  //     id: {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: "User"
  //     },
  //     username: String
  // },
  // comments: [{
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Comment"
  // }]
});
var Article = mongoose.model("Article", articleSchema);

module.exports = Article;
