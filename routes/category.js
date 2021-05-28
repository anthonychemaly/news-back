var express = require("express");
var router = express.Router();
var apis = require("../controllers/category.controller");

//todo when back
/* GET users listing. */
router.get("/:id", apis.getCategory);
router.put("/:id", apis.updateCategory);
router.delete("/:id", apis.deleteCategory);
router.get("/", apis.getAllCategories);
router.post("/", apis.postCategory);

module.exports = router;
