const bcrypt = require('bcrypt')
const User = require('../model/users.model')
const getErrorMessage = require('../lib/dbErrorHandlers')


let getUsersRoute = async (req, res) => {
    try {
        let users = await User.find()
        res.json(users)
        // console.log(req.cookies.t)
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        })
    }
}

let userPolicy = async (req) => {
    let user = await User.findById(req.params.userId)
    let profile = req.profile
    return user.id === profile.id
}

let updateUserRoute = async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(401).json({error: 'You can only delete your account!'})
    }
}

let deleteUserRoute = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        try {
            await User.findByIdAndDelete(req.params.userId)
            res.status(200).json({
                error: 'User has been deleted...'
            })
        } catch (err) {
            res.status(500).json(err)
        }
    } catch (err) {
        res.status(500).json('User Not Found')
    }
}

let getUserRoute = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.json(user)
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        })
    }
}

module.exports = {
    getUsersRoute,
    updateUserRoute,
    deleteUserRoute,
    getUserRoute,
    userPolicy
}