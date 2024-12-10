const express = require('express')
const upload = require('../controllers/upload.controller')
const uploadRouter = express.Router()

uploadRouter.post('/', upload.single('file'), (req, res) => {
    res.status(200).json({
        message: 'file has been uploaded'
    })
})

module.exports = uploadRouter