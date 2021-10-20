const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);

const insertPin = function(pins) {
  return db
    .query(`
    INSERT INTO pins (description, image_url, lat, long, map_id, user_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;`, [pins.description, pins.image_url, pins.lat, pins.long, pins.map_id, pins.user_id])
    .then((result) => {
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    })
}
exports.insertPin = insertPin;

const insertMaps = function(maps) {
  return db
  .query(`
  INSERT INTO maps (user_id, title, category_name)
  VALUES ($1, $2, $3)
  RETURNING *;`, [maps.user_id, maps.title, maps.category_name])
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err)
    return null;
  });

}
exports.insertMaps = insertMaps;

const getMapPins = function(map_id) {
  return db
    .query(`SELECT * FROM pins WHERE map_id = $1;`, [map_id])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
}
exports.getMapPins = getMapPins

const editpin = function() {
  SELECT

}
