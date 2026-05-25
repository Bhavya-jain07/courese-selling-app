const {Router} = require("express");
const adminRouter = Router();
const adminModel = require("../model/admin.model");
// const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const adminMiddleware = require("../middleware/admin.middleware")
const {signin,signup, course, updateCourse, getCourses} = require("../controller/admin.controller")

//bcrypt, zod, jwt
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/User.model");
const courseModel = require("../model/course.model");
require("dotenv").config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

adminRouter.post("/signup",signin );
adminRouter.post("/signin",signup );
adminRouter.post("/course",adminMiddleware,course);
adminRouter.put("/course", adminMiddleware,updateCourse);
adminRouter.get("/course/bulk", adminMiddleware,getCourses);

module.exports = adminRouter;
