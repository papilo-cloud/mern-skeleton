const jwt = require("jsonwebtoken")
const authenticate = require("../lib/authenticate_password")
const User = require("../model/users.model")
const config = require("../config/config")
const getErrorMessage = require('../lib/dbErrorHandlers')
const encryptPassword = require('../lib/encrypt_password')


let createUserRoute = async (req, res) => {
    try {
        const password = await encryptPassword(req.body.password)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password,
            subject: req.body.subject
        })
        const users = await user.save()
        res.status(201).json(users)
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        })
    }
}

let signin = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email})
        if (!user) {
            return res.status(401).json({
                error: 'User not found!'
            })
        }
        if (!(await authenticate(req.body.password, user.password))) {
            return res.status(401).send({
                error: 'Email and password do not match.'
            })
        }

        const token = jwt.sign(
            {userId: user.id},
            config.jwtSecret
        )
        console.log(token)
        res.cookie('t', token, {expire: new Date() + 9999})

        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                subject: user.subject
            }
        })
        
    } catch (err) {
        res.status(401).json({
            error: 'Could not sign in'
        })
    }
}

let signout = (req, res) => {
    res.clearCookie('t')
    return res.status(200).json({
        message: 'signed out'
    })
}

module.exports = {signin, createUserRoute, signout}