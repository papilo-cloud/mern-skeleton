const bcrypt = require('bcrypt')

const authenticate = async (password, hashed_password) => {
    const validated = await bcrypt.compare(password, hashed_password)
    return validated
}

module.exports = authenticate