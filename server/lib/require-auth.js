let requireAuth = (req, res, next) => {
    if (req.profile) {
        next()
    } else {
        return res.sendStatus(401)
    }
}


module.exports = requireAuth