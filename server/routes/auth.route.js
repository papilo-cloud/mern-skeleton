const { signin, createUserRoute, signout } = require('../controllers/auth.controller')
const validate = require('../lib/validate_password')

const authRoute = require('express').Router()

authRoute.route('/signin').post(signin)
authRoute.route('/signout').get(signout)
authRoute.route('/register')
    .post(validate, createUserRoute)


module.exports = authRoute