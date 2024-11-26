let enforce = (policy) => async (req, res, next) => {
    if (await policy(req)) {
        next()
    } else {
        return res.status(403).json({
            error: 'User is not authorized'
        })
    }
}


module.exports = enforce