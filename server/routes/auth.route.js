const { signin } = require('../controllers/auth.controller')

const authRoute = require('express').Router()

authRoute.route('/signin').post(signin)
// authRoute.route('/').get(signin)


module.exports = authRoute