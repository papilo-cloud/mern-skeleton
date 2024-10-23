const config = require('../config/config')
const app = require('./express')
const userRoute = require('./routes/user.route')
const mongoose = require('mongoose')


mongoose.set('strictQuery', false)

main().catch(() => {throw new Error(`unable to connect to DB: ${config.mongoUri}`)}
)
async function main() {
    const client = await mongoose.connect(config.mongoUri, 
    {
        dbName: 'blog'
    },
    {
        useFindAndModify: true,
        useCreateIndex: true
    })
}

app.listen(config.port, (err) => {
    if (err) {
        console.error(err)
    }
    console.log('Server started on port %s',config.port)
})