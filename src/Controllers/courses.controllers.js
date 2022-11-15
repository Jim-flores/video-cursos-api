const { addListener } = require("nodemon");
const CourseService = require("../Services/courses.services");

const getAllCourses = async (req, res) => {
  try {
    const result = await CourseService.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const getAllCoursesCatVIdeo = async (req, res) => {
  try {
    const result = await CourseService.getAllCatVideo();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};
const createCourse = async (req, res, next) => {
  try {
    const newCourse = req.body;
    const result = await CourseService.add(newCourse);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 418,
      errorContent: error,
      message: "Revisa la información que mandas",
    });
  }
};
const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;
    if (dataUpdate.description) {
      const result = await CourseService.update(dataUpdate, id);
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: "Solo cambie la descripcion" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllCourses,
  getAllCoursesCatVIdeo,
  createCourse,
  updateCourse,
};
