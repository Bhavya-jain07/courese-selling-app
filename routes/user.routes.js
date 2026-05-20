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


userRouter.post("/signup", async (req, res) => {
  try{
    const {email, password, firstname, lastname} = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      email,
      password:hashedPass,
      firstname,
      lastname
    })
    console.log(user);

    

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

userRouter.post("/signin", async (req, res) => {
  const {email, password} = req.body;
  const user = await userModel.findOne({
    email
  })
  if(!user){
    return res.status(403).json({
      message:"user not found"
    })
    // const token = jwt.sign({
    //   id:user._id},
    //   JWT_USER_PASSWORD
    // )
    // res.json({
    //   token
    // })
  }
  const passMatch = await bcrypt.compare(password,user.password)
  if(passMatch){
    const token = jwt.sign({
      id:user._id},
      JWT_USER_PASSWORD
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

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});


module.exports = {userRouter};