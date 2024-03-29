const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PersonRouters = require('./Api/Routes/Person');

app.use('/person', PersonRouters);

module.exports = app;