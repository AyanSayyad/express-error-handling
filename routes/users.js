let express = require('express')
const usersController = require('../controllers/users.controller')
const { tryCatch } = require('../utils/tryCatch')
let router = express.Router()

router.get('/', tryCatch(usersController.users))
router.get('/userById', tryCatch(usersController.userById))
router.post('/create', tryCatch(usersController.create))
router.post('/login', tryCatch(usersController.login))

module.exports = router
