const express = require('express');
const masks = require('./controllers/masks');

let routes = express.Router();

routes.route('/masks')
  .get(masks.root)

routes.route('/masks/:name')
  .get(masks.byMaskName)

module.exports = routes;
