var express = require("express");
var router = express.Router();
var apis = require("../controllers/article.controller");
var auth = require("../middlewares/auth");

/* GET users listing. */
router.get("/my", auth(["author", "admin"]), apis.getArticleByHost);
router.get("/:id", apis.getArticle);
router.put("/:id", auth(["author", "admin"]), apis.updateArticle);
router.delete("/:id", auth(["author", "admin"]), apis.deleteArticle);
router.get("/", apis.getAllArticles);
router.post("/", auth(["author", "admin"]), apis.postArticle);

module.exports = router;
