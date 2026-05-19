const express = require("express");
const app = express();

const {createUserRoutes} =  require("./routes/user.routes")
const {createCourseRoutes} = require("./routes/course.routes")
createUserRoutes(app);
createCourseRoutes(app);


app.listen(3000);