const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.models");
const Videos = require("../models/videos.models");

class VideoService {
  static async getVideos() {
    try {
      const result = await Videos.findAll({
        attributes: ["id", "title", "url"],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async add(newVideo) {
    try {
      const result = await Videos.create(newVideo);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async dropVideo(id) {
    try {
      const result = await Videos.destroy({
        where: { id: id },
        force: true,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = VideoService;
