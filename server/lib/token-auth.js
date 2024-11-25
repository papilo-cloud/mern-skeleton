const jwt = require('jsonwebtoken')
const config = require('../config/config')

let tokenAuth = (findUserByToken) => (req, res, next) => {
    let header = req.headers.authorization
    let token = header && header.split(' ')[1]

    if (token) {
        let payload
        try {
            payload = jwt.verify(token, config.jwtSecret)
        } catch (err) {
            return res.sendStatus(401)
        }
        console.log(payload)
        const user = findUserByToken(payload)
        if (user) {
            req.profile = user
        } else {
            return res.sendStatus(401)
        }
    }
    next()
}


module.exports = tokenAuth