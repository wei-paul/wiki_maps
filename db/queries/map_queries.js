const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);


const insertPin = function(description, image_url, lat, long, map_id, user_id) {
  return db

}
