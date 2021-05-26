const Article = require("../models/article");

exports.postArticle = async (req, res) => {
  var article = new Article({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
  });
  article.save((err, data) => {
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

exports.getAllArticles = async (req, res) => {
  Article.find({})
    .populate("image")
    .exec((err, data) => {
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

exports.updateArticle = async (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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

exports.deleteArticle = async (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err, data) => {
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

exports.getArticle = async (req, res) => {
  Article.findById(req.params.id)
    .populate("image")
    .exec((err, data) => {
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