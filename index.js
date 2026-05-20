const express = require("express");
const app = express();

const mongoose = require("mongoose")
mongoose
  .connect("mongodb://127.0.0.1:27017/coursera")
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log("err conn,", err);
  });

  app.use(express.json());

const {userRouter} =  require("./routes/user.routes")
const {courseRouter} = require("./routes/course.routes")
const adminRouter = require ("./routes/admin.routes")

app.use("/user",userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter);




app.listen(3000);