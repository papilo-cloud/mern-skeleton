const { signin, signout } = require('../controllers/auth.controller')

const router = require('express').Router()

router.route('/auth/signin')
    .post(signin)

router.route('/auth/signout')
    .get(signout)

module.exports = router