var express = require("express");
var router = express.Router();
var apis = require("../controllers/article.controller");

/* GET users listing. */
router.get("/:id", apis.getArticle);
router.put("/:id", apis.updateArticle);
router.delete("/:id", apis.deleteArticle);
router.get("/", apis.getAllArticles);
router.post("/", apis.postArticle);

module.exports = router;
