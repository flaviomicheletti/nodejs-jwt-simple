const jwt = require('jsonwebtoken');
const config = require('../config.json');

exports.required = (req, res, next) => {
    try {
        const { secret } = config;
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, secret);
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).send({ mensagem: 'Invalid Token' });
    }
}