const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
  deleteCategory,
} = require("../Controllers/categories.controllers");

const router = Router();

router.get("/categories", getAllCategories);

router.post("/categories", createCategory);

router.delete("/categories/:id", deleteCategory);

module.exports = router;
