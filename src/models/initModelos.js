const Categories = require("./categories.models");
const Courses = require("./courses.models");
const UserCourses = require("./userCourses.models");
const Users = require("./users.models");
const Videos = require("./videos.models");

const initModels = () => {
  Courses.hasMany(UserCourses, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  Users.hasMany(UserCourses, {
    foreignKey: { name: "course_id", allowNull: false },
  });
  UserCourses.belongsTo(Courses, {
    foreignKey: {
      name: "user_id",
      allowNull: false,
    },
  });
  UserCourses.belongsTo(Users, {
    foreignKey: { name: "course_id", allowNull: false },
  });
  Courses.hasMany(Videos, {
    foreignKey: { name: "course_id", allowNull: false },
  });
  Videos.belongsTo(Courses, {
    foreignKey: { name: "course_id", allowNull: false },
  });
  Categories.hasMany(Courses, {
    foreignKey: { name: "category_id", allowNull: false },
  });
  Courses.belongsTo(Categories, {
    foreignKey: { name: "category_id", allowNull: false },
  });
};
module.exports = initModels;
