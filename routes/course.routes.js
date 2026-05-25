
const {Router} = require("express");
const courseRouter = Router();
const userMiddleware = require("../middleware/user.middleware");
const { purchase, preview } = require("../controller/course.controller");


courseRouter.post("/purchase", userMiddleware,purchase);
courseRouter.get("/preview",preview);
module.exports = courseRouter;
