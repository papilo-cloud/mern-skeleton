const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/user.controller')

router.route('/api/users')
    .get(user_controller.list)
    .post(user_controller.create)

router.route('/api/users/:userId')
    .get(user_controller.read)
    .put(user_controller.update)
    .delete(user_controller.remove)

router.param('userId', user_controller.userById)

module.exports = router