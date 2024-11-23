const bcrypt = require('bcrypt')

const encryptPassword = async (password) => {
    if (!password) return ''
    try {
        const salt = await bcrypt.genSalt(10)
        const hashed_password = await bcrypt.hash(password, salt)
        return hashed_password
    } catch (err) {
        return ''
    }
}

module.exports = encryptPassword