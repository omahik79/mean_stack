const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

//app.com
app.get("", (req, res) => {
  res.render("signin", {
    title: "signin to Note Application",
    name: "Omar Almukhtar",
  });
});

//app.com/register
app.get("/register", (req, res) => {
  res.render("register", { title: "register Note Application", name: "Omar Almukhtar" });
});

//app.com/main
app.get("/main", (req, res) => {
  res.render("main", {
    title: "wellcome to Note Application",
    name: "Omar Almukhtar",
    email: "omahik79@gmail.com",
  });
});



app.get("/main/*", (req, res) => {
  res.send("page is not found!");
});

app.get("*", (req, res) => {
  res.send("page is not found!");
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
