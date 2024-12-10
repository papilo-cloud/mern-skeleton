const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, res, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage})

module.exports = upload