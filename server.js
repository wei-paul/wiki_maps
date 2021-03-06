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
const { insertPin, insertMaps, getMapPins, deletePin } = require("./db/queries/map_queries.js")
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

// Mosunt all resource route
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/maps", mapsRoutes(db));
// app.use("/showcase", showcaseRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.render("index");
  console.log("req.cookies.user_id:", req.cookies.user_id);
});

//login
app.get('/login/:id', (req, res) => {
  res.cookie("user_id", req.params.id);

  res.redirect('/');
});

app.post("/", (req, res) => {
  res.redirect("/");
});

app.get("/editMap", (req, res) => {
  console.log(req.query.map_id);
  res.render("editMap");
});



app.post("/pins", (req, res) => {
  insertPin(req.body, req.cookies.user_id);
  // console.log("db is:", db);
})

app.post("/maps", (req, res) => {
  insertMaps(req.body, req.cookies.user_id)
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {

  });
});

app.get('/api/maps/:map_id', (req, res) => {
  getMapPins(req.params.map_id)
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {

  });
})

app.post("/deletePins", (req, res) => {
  console.log(req)
  deletePin(req.body.map_id, req.body.deleteLat, req.body.deleteLong)
  .then((result) => {
    console.log(result, "Hello im inside server")
    res.sendStatus(200)
  })
  .catch((err) => {

  });
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



