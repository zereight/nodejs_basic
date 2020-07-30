const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const fs = require("fs");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "sajiusdhfuiwehui", // 쿠키를 임으로 변경하는 것을 막기위한 sign값
    resave: false, // 세션을 언제나 저장할 것인지
    saveUninitialized: true, // 변경되지않은 세션을 저장할 것인지
  })
);

app.listen(3000, () => {
  console.log("Hi");
});

module.exports = app;
