'use strict';

require('./models');
const config = require("./config/app");
let mongoose = require('mongoose');
 mongoose.Promise = global.Promise;
 mongoose.connect(config.connectionString);
let FoodAdditive = mongoose.model('FoodAdditive');
//let port = process.env.PORT || 3001;

const app = require("./config/app/application");

app.listen(config.port, () =>
    console.log(`Server running at port: ${config.port}`)
);
//app.listen(config.port, () => console.log(`App running at http://localhost:${port}`));