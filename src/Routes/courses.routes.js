const { Router } = require("express");
const {
  getAllCourses,
  getAllCoursesCatVIdeo,
  createCourse,
  updateCourse,
} = require("../Controllers/courses.controllers");
const router = Router();

router.get("/courses", getAllCourses);
router.get("/coursescatvideos", getAllCoursesCatVIdeo);
router.post("/courses", createCourse);
router.put("/courses/:id", updateCourse);

module.exports = router;
