const express = require("express");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Hi");
});

module.exports = app;
