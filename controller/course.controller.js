async function purchase (req, res) {
  const userID = req.user.id;
  const courseId = req.body.courseId;

  // should check that the user has actually paid the price(Razorpay or something)
  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message: "you have successfully purchased the course",
  });
};

 async function preview (req, res)  {
   const courses = await courseModel.find({});

   res.json({
     courses,
   });
 };


 module.exports ={purchase,preview}
