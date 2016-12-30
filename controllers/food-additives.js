// controller -> categories.js

'use strict';

module.exports = function(FoodAdditive) {
  function get(req, res) {
    FoodAdditive.find({}, function(err, foodAdditives) {
      if (err) {
        throw err;
      }
      res.json({
        result: foodAdditives
      });
    });
  }

  function getById(req, res) {
    FoodAdditive.findById(req.params.id, function(err, foodAdditive) {
      if (err || !foodAdditive) {
        res.status(404)
          .json({
            message: 'Invalid ID'
          });
      }

      res.json({
        result: foodAdditive
      });
    });
  }

  function post(req, res) {
    console.log(req.body);
    let foodAdditive = new FoodAdditive(req.body);
    
    foodAdditive.save(function(err) {
      if (err) {
        throw err;
      }

      res.status(201)
        .json({
          result: foodAdditive
        });
    });
  }

  let controller = {
    get: get,
    getById: getById,
    post: post
  };

  return controller;
};