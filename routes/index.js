let express = require('express')
let router = express.Router()

/* GET home page. */
router.use('/users', require('./users'))

module.exports = router
