var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mediaSchema = new Schema({
  fileName: String,
  type: String,
  url: String,
  article: { type: Schema.Types.ObjectId, ref: "Article" },
  admin: { type: Schema.Types.ObjectId, ref: "Admin" },
  created_at: Date,
});

var Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
