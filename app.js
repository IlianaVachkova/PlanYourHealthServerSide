'use strict';

let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors');

let dbPath = 'mongodb://localhost/additives';

mongoose.connect(dbPath);

require('./models');
let FoodAdditive = mongoose.model('FoodAdditive');

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors({origin: 'http://localhost:3000'}));
require('./routes')(app);

let port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App running at http://localhost:${port}`));