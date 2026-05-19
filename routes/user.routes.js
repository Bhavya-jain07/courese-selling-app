
function createUserRoutes(app){
app.post("/user/signup", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
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
}

module.exports = {createUserRoutes};