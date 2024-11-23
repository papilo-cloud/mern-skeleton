
const validate = (req, res, next) => {
    const password = req.body.password
    if (password && password.length < 6) {
        res.status(406).json({
            error: 'Password must be at least 6 characters.'
        })
        return
    }
    else{
        next()
    }
}

module.exports = validate