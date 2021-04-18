const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const routers = require('./routers')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(routers());

module.exports = app;