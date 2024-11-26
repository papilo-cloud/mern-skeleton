const User = require('../model/users.model')

let findUserByCredentials = () =>{}

let findUserByToken = async ({userId}) =>
    await User.findById(userId)


exports.byToken = findUserByToken