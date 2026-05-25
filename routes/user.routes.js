// const express = require("express")
// const Router = express.Router;
//same though

const {Router} = require("express");
const userRouter = Router();
const userModel = require("../model/User.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const userMiddleware = require("../middleware/user.middleware");
const courseModel = require("../model/course.model");
const purchaseModel = require("../model/purchase.model");
const { signup, signin, purchase } = require("../controller/user.controller");

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

userRouter.get("/purchases", userMiddleware, purchase);


module.exports = userRouter;