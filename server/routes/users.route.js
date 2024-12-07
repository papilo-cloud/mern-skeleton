const express = require('express')
const userController = require('../controllers/users.controller')
const enforce = require('../lib/enforce')
const userRouter = express.Router()
const requireAuth = require('../lib/require-auth')


userRouter.route('/')
    .get(userController.getUsersRoute)

userRouter.use(requireAuth)
userRouter.route('/:userId')
    .get(userController.getUserRoute)
    .put(enforce(userController.userPolicy), userController.updateUserRoute)
    .delete(enforce(userController.userPolicy), userController.deleteUserRoute)


module.exports = userRouter