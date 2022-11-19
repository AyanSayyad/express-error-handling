const {
  INTERNAL_SERVER_ERROR,
  BAD_REQUEST
} = require('../constants/statusCodes')
const AppError = require('../utils/AppError')

const errorHandler = (error, req, res, next) => {
  const isProduction = req.app.get('env') === 'production' ? true : false

  !isProduction && console.log(error.stack)

  if (error.name === 'ValidationError') {
    return res.status(BAD_REQUEST).send({
      errors: {
        type: 'ValidationError',
        message: error.message
      }
    })
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).send({
      errors: {
        errorCode: error.errorCode,
        message: error.message
      }
    })
  }

  res.status(error.status || INTERNAL_SERVER_ERROR).send({
    errors: {
      message: error.message
    }
  })
}

module.exports = errorHandler
