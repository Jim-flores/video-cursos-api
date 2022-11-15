const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CourseService {
  static async getAll() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title", "description", "instructor"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllCatVideo() {
    try {
      const result = await Courses.findAll({
        attributes: ["id", "title"],
        include: [
          {
            model: Categories,
            attributes: ["name"],
          },
          { model: Videos, attributes: ["title", "url"] },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(dataUpdate, id) {
    try {
      const { description } = dataUpdate;
      const result = await Courses.update(
        { description },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CourseService;
