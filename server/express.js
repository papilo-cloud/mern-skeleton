const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const app = express()
const cors = require('cors')
const compress = require('compression')

const userRouter = require('./routes/users.route')
const authRoute = require('./routes/auth.route')
const tokenAuth = require('./lib/token-auth')
const { byToken } = require('./lib/find-user')
const uploadRouter = require('./routes/upload.route')


app.use(express.json())
app.use(cors())
app.use(compress())
app.use(cookieParser())
app.use(logger('tiny'))




app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use('/', express.static(path.join(__dirname, '/public')))
app.use('/api/auth', authRoute)
app.use(tokenAuth(byToken))
app.use('/api/upload', uploadRouter)
app.use('/api/users', userRouter)

module.exports = app