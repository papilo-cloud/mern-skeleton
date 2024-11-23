require('dotenv').config()

const config = {
    mongodbUri: process.env.MONGODBURL,
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || 'my_s3cret'
}

module.exports = config