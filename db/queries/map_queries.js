const { Pool } = require("pg");
const dbParams = require("../../lib/db.js");
const db = new Pool(dbParams);

const insertPin = function(pin, userID) {
  return db
  .query(`
  INSERT INTO pins (description, image_url, lat, long, map_id, user_id)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;`, [pin.description, pin.image_url, pin.lat, pin.long, pin.map_id, userID])
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
    return null;
  })
}

exports.insertPin = insertPin

const insertMaps = function(maps, userId) {
  return db
  .query(`
  INSERT INTO maps (user_id, title, category_name, image_url)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`, [userId, maps.title, maps.category_name, maps.image_url])
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

const grabAllMapFromUser = function(userId) {
  return db
  .query(`SELECT *
  FROM maps
  WHERE user_id = $1;`, [userId])
  .then((result) => {
    return result.rows[0];
  });
}
exports.grabAllMapFromUser = grabAllMapFromUser

const editpin = function() {
  SELECT

}

