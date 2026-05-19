const express = require("express");
const app = express();

app.post("/user/signup", (req, res) => {
    res.json({
        message:"signup endpoint"
    })
});


app.get("/user/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});


app.get("/user/purchases", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});


app.post("/course/purchase", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});


app.get("/course", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});



app.listen(3000);