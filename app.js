/* globals require 
"use strict";

const mongoose = require("mongoose");
require("./config/mongoose")(mongoose);
let FoodAdditive = require("./models/food-additive-model");
const data = require("./data")({ FoodAdditive });
data.createFoodAdditive("ddd", 1, "ddd", 3, "ddd", "ddd", "dddd", ["ddd"]);
data.getAllFoodAdditives().then(data=> console.log(data));
data.getFoodAdditiveById("58663c4d8dc3cd0a84e9a3bb").then(data=>console.log(data));*/
'use strict';

let express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

let dbPath = 'mongodb://localhost/additives';

mongoose.connect(dbPath);

require('./models');
let FoodAdditive = mongoose.model('FoodAdditive');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./routes')(app);

let port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App running at http://localhost:${port}`));