const { addListener } = require("nodemon");
const CategoryService = require("../Services/categories.services");

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoryService.getCategories();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const createCategory = async (req, res, next) => {
  try {
    const newCategory = req.body;
    const result = await CategoryService.add(newCategory);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await CategoryService.dropCategory(id);
    res.status(202).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
};
