let createError = require('http-errors')
let express = require('express')
let logger = require('morgan')

const errorHandler = require('./middleware/errorHandler')
const { NOT_FOUND } = require('./constants/statusCodes')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes'))

app.use(function (req, res, next) {
  next(createError(NOT_FOUND))
})

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Server listening on port 4000')
})

module.exports = app
