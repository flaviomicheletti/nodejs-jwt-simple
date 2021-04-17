const express = require('express');

const router = express.Router();
const jwt = require('./middleware/jwt');
const users = require('./users/controller');

router.get('/open', users.foo);
router.get('/closed', jwt.required, users.foo);
router.post('/users/authenticate', users.login)

module.exports = () => router;