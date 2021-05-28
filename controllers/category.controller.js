const Category = require("../models/category");

exports.postCategory = async (req, res) => {
  var category = new Category({
    name: req.body.name,
    type: req.body.type,
    created_at: new Date(),
  });
  category.save((err, data) => {
    if (err) {
      res.send({
        success: false,
        error: err,
      });
    } else {
      res.send({
        success: true,
        data: data,
      });
    }
  });
};

exports.getAllCategories = async (req, res) => {
  Category.find({}).exec((err, data) => {
    if (err) {
      res.send({
        success: false,
        error: err,
      });
    } else {
      res.send({
        success: true,
        data: data,
      });
    }
  });
};

exports.updateCategory = async (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.send({
        success: false,
        error: err,
      });
    } else {
      res.send({
        success: true,
        data: data,
      });
    }
  });
};

exports.deleteCategory = async (req, res) => {
  Category.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) {
      res.send({
        success: false,
        error: err,
      });
    } else {
      res.send({
        success: true,
        data: data,
      });
    }
  });
};

exports.getCategory = async (req, res) => {
  Category.findById(req.params.id).exec((err, data) => {
    if (err) {
      res.send({
        success: false,
        error: err,
      });
    } else {
      res.send({
        success: true,
        data: data,
      });
    }
  });
};
