// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cookieParser = require("cookie-parser")
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const mapsRoutes = require("./routes/maps");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/maps", mapsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
});

//login
app.get('/login/:id', (req, res) => {
  res.cookie("user_id", req.params.id);
  console.log("req.params is: ", req.params);

  // send the user somewhere
  res.redirect('/');
});


app.post("/", (req, res) => {
  res.redirect("/");
});

app.get("/editMap", (req, res) => {
  console.log(req.cookies);
  res.render("editMap");
});

app.post("/editMap", (req, res) => {

  res.redirect("/editMap");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



//Can't set cookie right now because I don't have a user to tie that cookie to
//Because i want to set the cookie to the user id, but i dont' have the user id
//In which case I could set that cookie to the database user, BUT that database user has alot of user
//THEN i would have to make query to get that specific user that I want to link the cookie to
