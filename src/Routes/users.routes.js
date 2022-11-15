const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
  createUserCourse,
} = require("../Controllers/users.controllers");
const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

router.get("/users/:id/courses", getUserWithCourses);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.post("/users/:id", createUserCourse);

module.exports = router;
