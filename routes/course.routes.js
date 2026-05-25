
const {Router} = require("express");
const courseRouter = Router();
const userMiddleware = require("../middleware/user.middleware")


courseRouter.post("/purchase", userMiddleware,async(req, res) => {
  const userID = req.user.id;
   const courseId = req.body.courseId;

   // should check that the user has actually paid the price(Razorpay or something)
   await purchaseModel.create({
     userId,
     courseId
   });
    res.json({
    message: "you have successfully purchased the course",
  });
});

courseRouter.get("/preview", async (req, res) => {
   const courses = await courseModel.find({});

  res.json({
   courses
  });
});

module.exports = courseRouter;
