const jwt = require("jsonwebtoken")
const authenticate = require("../lib/authenticate_password")
const User = require("../model/users.model")
const config = require("../config/config")

let signin = async (req, res) => {
    try {
        let user = await User.findOne({email: req.body.email})
        if (!user) {
            return res.status(401).json({
                error: 'User not found!'
            })
        }
        if (!(await authenticate(req.body.password, user.password))) {
            return res.status(401).send({
                error: 'Email and password do not match.'
            })
        }

        const token = jwt.sign(
            {id: user.id},
            config.jwtSecret
        )
        res.cookies('t', token, {expire: new Date() + 9999})

        return res.json({
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
        
    } catch (err) {
        res.status(401).json({
            error: 'Could not sign in.'
        })
    }
}


module.exports = {signin}