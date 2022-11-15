const { addListener } = require("nodemon");
const UserService = require("../Services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserService.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserService.getById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const getUserWithCourses = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserService.getUserJoinCourses(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserService.add(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    console.log(dataUpdate);
    const result = await UserService.update(dataUpdate, id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
const createUserCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data, id);
    const result = await UserService.addCourse(data.title, id);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  createUserCourse,
};
