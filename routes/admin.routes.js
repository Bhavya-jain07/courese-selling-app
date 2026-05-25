const {Router} = require("express");
const adminRouter = Router();
const adminModel = require("../model/admin.model");
// const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const adminMiddleware = require("../middleware/admin.middleware")

//bcrypt, zod, jwt
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/User.model");
const courseModel = require("../model/course.model");
require("dotenv").config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;

adminRouter.post("/signup", async (req, res) => {
  //putting it in a try and catch block
 try{
    const {email, password, firstname, lastname} = req.body; // should add a ZOD validation

    //hash the password before storing it in a db

    const hashedPass = await bcrypt.hash(password, 10);

    const admin = await adminModel.create({
      email,
      password:hashedPass,
      firstname,
      lastname
    })


    res.json({
      message:"signedup successfully"
    })
  }
  catch(err){
    res.json({
      message:"nhi hua bhai error h kuch",err
    })
  }
});

adminRouter.post("/signin", async (req, res) => {
 const {email, password} = req.body;
  const admin = await adminModel.findOne({
    email
  })
  if(!admin){
    return res.status(403).json({
      message:"admin not found"
    })
    // const token = jwt.sign({
    //   id:user._id},
    //   JWT_USER_PASSWORD
    // )
    // res.json({
    //   token
    // })
  }
  const passMatch = await bcrypt.compare(password,admin.password)
  if(passMatch){
    const token = jwt.sign({
      id:admin._id},
      JWT_ADMIN_PASSWORD
    )
    res.json({
      token
    })
  }
  else{
    res.status(403).json({
      mesage:"incorrect credentials"
    })
  }
});

adminRouter.post("/course",adminMiddleware, async(req, res) => {
 const {title ,description ,price ,imageurl } = req.body;
 const adminId = req.admin.id;
  const course = await courseModel.create({
    title,description,price, imageurl,creatorID :adminId
  })
  res.json({
    message:"course created",
    courseId : adminId
  });
});

adminRouter.put("/course", adminMiddleware,async(req, res) => {
  const adminId = req.admin.id;
  const { title, description, imageUrl, price, courseId } = req.body;
  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title,
      description,
      imageUrl,
      price
    },
  );
  res.json({
    message: "course updated",
    courseId:course._id
  });
});

adminRouter.get("/course/bulk", adminMiddleware,async(req, res) => {
  const adminId = req.adminId;
   const course = await courseModel.findOne({
    creatorId:adminId
   });
  res.json({
   course
  });
});




module.exports = adminRouter;
