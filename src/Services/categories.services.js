const Categories = require("../models/categories.models");

class CategoryService {
  static async getCategories() {
    try {
      const result = await Categories.findAll({
        attributes: ["id", "name"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async dropCategory(id) {
    try {
      const result = await Categories.destroy({
        where: { id: id },
        force: true,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoryService;
