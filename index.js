const express = require("express");
const app = express();

app.post("/user/signup", (eeq, res) => {
    res.json({
        message:"signup endpoint"
    })
});


app.get("/user/signup", (eeq, res) => {
  res.json({
    message: "signup endpoint",
  });
});


app.get("/user/purchases", (eeq, res) => {
  res.json({
    message: "signup endpoint",
  });
});


app.post("/course/purchase", (eeq, res) => {
  res.json({
    message: "signup endpoint",
  });
});


app.get("/course", (eeq, res) => {
  res.json({
    message: "signup endpoint",
  });
});



app.listen(3000);