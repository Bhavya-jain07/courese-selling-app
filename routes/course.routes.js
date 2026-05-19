
function createCourseRoutes(app){
app.post("/course/purchase", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});

app.get("/course", (req, res) => {
  res.json({
    message: "signup endpoint",
  });
});}

module.exports = {createCourseRoutes};
