/* globals require */
"use strict";

const mongoose = require("mongoose");
require("./config/mongoose")(mongoose);
let FoodAdditive = require("./models/food-additive-model");
const data = require("./data")({ FoodAdditive });
data.createFoodAdditive("ddd", 1, "ddd", 3, "ddd", "ddd", "dddd", ["ddd"]);
