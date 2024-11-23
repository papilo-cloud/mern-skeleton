const express = require('express')
const { createUser, getUsers } = require('../controllers/users.controller')
const authenticate = require('../lib/authenticate_password')
const validate = require('../lib/validate_password')
const userRouter = express.Router()


userRouter.route('/')
    .get(getUsers)
userRouter.route('/register')
    .post(validate, createUser)


module.exports = userRouter