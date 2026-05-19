const express = require("express");
const app = express();

const {userRouter} =  require("./routes/user.routes")
const {courseRouter} = require("./routes/course.routes")
const adminRouter = require ("./routes/admin.routes")

app.use("/user",userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);




app.listen(3000);