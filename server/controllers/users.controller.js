const express = require('express')
const User = require('../model/users.model')
const getErrorMessage = require('../lib/dbErrorHandlers')
const encryptPassword = require('../lib/encrypt_password')


let createUser = async (req, res) => {
    try {
        const password = await encryptPassword(req.body.password)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password
        })
        const users = await user.save()
        res.status(201).json(users)
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        })
    }
}

let getUsers = async (req, res) => {
    try {
        let users = await User.find()
        res.json(users)
    } catch (err) {
        return res.status(400).json({
            error: getErrorMessage(err)
        })
    }
}


module.exports = {
    createUser,
    getUsers
}