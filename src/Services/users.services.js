const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");

class UserService {
  static async getAll() {
    try {
      const result = await Users.findAll({
        attributes: ["id", "first_name", "last_name", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: ["id", "first_name", "last_name", "email"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getUserJoinCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["id", "first_name"],
        include: {
          model: UserCourses,
          attributes: ["course_id"],
          include: {
            model: Courses,
            attributes: ["title"],
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(updateData, id) {
    try {
      const { first_name, last_name, password } = updateData;
      const result = await Users.update(
        { first_name, last_name, password },
        {
          where: { id },
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCourse(newCourse, id) {
    try {
      const result = await Courses.findOne({
        where: { title: newCourse },
      });
      const result2 = await UserCourses.create({
        user_id: id,
        course_id: result.id,
      });
      return result2;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
