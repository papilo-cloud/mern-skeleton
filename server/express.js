const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')

const userRouter = require('./routes/users.route')
const authRoute = require('./routes/auth.route')
const tokenAuth = require('./lib/token-auth')
const { byToken } = require('./lib/find-user')


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(logger('tiny'))
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/api/auth', authRoute)
app.use(tokenAuth(byToken))
app.use('/api/users', userRouter)

module.exports = app