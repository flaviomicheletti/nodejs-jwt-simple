const jwt = require('jsonwebtoken');
const config = require('../config.json');

const login = async (req, res, next) => {
    try {
        // fake user 
        const user = { id: 999, password: "1234", login: "email@email.com" }

        // test login
        if (req.body.password === user.password && req.body.username === user.login) {
            const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: "1h" });
            return res.status(200).send({ message: 'Success', token: token });
        }
        return res.status(401).send({ message: 'Auth fail' })

    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

const foo = async (req, res, next) => {
    res.json({ "message": "ok" });
}

module.exports = { login, foo };