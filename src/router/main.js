module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index", {
      title: "my homepage",
      length: 5,
    });
  });
};
