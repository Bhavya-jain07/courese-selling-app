const express = require("express");
const app = express();

const {userRouter} =  require("./routes/user.routes")
const {courseRouter} = require("./routes/course.routes")


app.use("/user",userRouter);
app.use("/course", courseRouter);




app.listen(3000);