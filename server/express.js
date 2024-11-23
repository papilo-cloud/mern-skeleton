const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')

const userRouter = require('./routes/users.route')
const authRoute = require('./routes/auth.route')


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(logger('tiny'))
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/api/users', userRouter)
app.use('/api/auth', authRoute)

module.exports = app