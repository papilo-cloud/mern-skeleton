const express = require('express')
const userController = require('../controllers/users.controller')
const enforce = require('../lib/enforce')
const userRouter = express.Router()


userRouter.route('/')
    .get(userController.getUsersRoute)


userRouter.route('/:userId')
    .get(enforce(userController.userPolicy), userController.getUserRoute)
    .put(enforce(userController.userPolicy), userController.updateUserRoute)
    .delete(enforce(userController.userPolicy), userController.deleteUserRoute)


module.exports = userRouter