const config = require('../config/config')
const app = require('./express')

app.listen(config.port, (err) => {
    if (err) {
        console.error(err)
    }
    console.log('Server started on port %s.', config.port)
})