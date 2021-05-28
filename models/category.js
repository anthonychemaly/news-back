var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  name: String,
  type: String,
  created_at: Date,
});

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;
