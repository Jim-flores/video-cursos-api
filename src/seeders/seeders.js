const db = require('../utils/database')

const Categories = require('../models/categories.models')
const Courses = require('../models/courses.models')
const Users = require('../models/users.models')
const Videos = require('../models/videos.models')
const UserCourses = require('../models/userCourses.models')
const initModels = require('../models/initModelos')
initModels()
const users = [
    { first_name: "Ian", last_name: "Rosas",  password: "1234", email: "ian@gmail.com"},
    { first_name: "Jim", last_name: "Flores",  password: "2345", email: "jim@gmail.com"},
    { first_name: "Jean", last_name: "Ticona",  password: "3456", email: "jean@gmail.com"}
];

const courses = [
    { title: "Fundamentos", description: "html y css", instructor:"Sahid", category_id: 1},
    { title: "React", description: "React redux, Dom, react form", instructor:"Benjamin", category_id: 2 },
    { title: "Node", description: "Express, Nodemon, sequelize", instructor:"Ian", category_id: 3 }
]

const categories = [
    { name: "fundamentos" },
    { name: "frontend" },
    { name: "backend" }
]

const video = [
    { title: "fundamentos html", url: "https://www.youtube.com/watch?v=jnvSJ59wfXA", course_id: 1 },
    { title: "reactjs", url: "https://www.youtube.com/watch?v=wGxDfSWC4Ww", course_id: 2 },
    { title: "nodejs", url: "https://www.youtube.com/watch?v=9U8EaVjuq6U", course_id: 3 }
]

const uc = [
    { user_id: 1, course_id: 1 },
    { user_id: 2, course_id: 2 },
    { user_id: 3, course_id: 3 },
]

db.sync({ force: true }).then(async () => {
    console.log("Iniciando plantación");
  
    users.forEach((user) => Users.create(user));
  
    setTimeout(() => {
        categories.forEach((category) => Categories.create(category));
    }, 100);
    setTimeout(() => {
        courses.forEach((course) => Courses.create(course));
    }, 200);
    setTimeout(() => {
      video.forEach((video) => Videos.create(video));
    }, 300);
    setTimeout(() => {
      uc.forEach((t) => UserCourses.create(t));
    }, 400);
  });