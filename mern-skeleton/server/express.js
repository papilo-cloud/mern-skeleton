const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const template = require('../template')
const userRoute = require('./routes/user.route')
const authRoute = require('./routes/auth.route')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send(template())
})

app.use('/', userRoute)
app.use('/', authRoute)

module.exports = app