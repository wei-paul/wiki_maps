/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM maps`;
    console.log(query);
    db.query(query)
      .then(data => {
        const maps = data.rows;
        res.json({ maps });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  const addMap =  function(user) {
    return pool.query(`
      INSERT INTO maps (user_id, title, pins_id, category_name)
      VALUES ($1, $2, $3, $4) RETURNING *;`,
      [maps.user_id, maps.title, maps.pins_id, maps.category_name])
        .then(res => res.rows[0])
        .catch(err => err);
    };

  exports.addMap = addMap;


  return router;
};


