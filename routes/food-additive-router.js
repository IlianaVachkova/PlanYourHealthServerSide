//categories-router.js
'use strict';

let express = require('express'),
  mongoose = require('mongoose');
let router = new express.Router();
let FoodAdditive = mongoose.model('FoodAdditive');

let controller = require('../controllers/food-additives')(FoodAdditive);

router.get('/additives', controller.get)
  .get('/additive/:id', controller.getById)
  .post('/additives', controller.post);

//register routes...

module.exports = function(app) {
  app.use('/data', router);
};