/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
const { insertMaps } = require('../db/queries/map_queries.js')
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

  const getMapId =  function(user) {
    return pool.query(`
      SELECT id
      FROM maps
      ORDER BY id DESC
      LIMIT 1
      `)
        .then(res => res.rows[0])
        .catch(err => err);
    };

  exports.getMapId = getMapId;


  return router;
};


