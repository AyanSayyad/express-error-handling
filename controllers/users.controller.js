const Joi = require('joi')
const { OK, BAD_REQUEST } = require('../constants/statusCodes')
const AppError = require('../utils/AppError')

const getUser = () => undefined
const createUser = () => undefined

exports.userById = async function (req, res, next) {
  const userId = user.id
  res.status(OK).send({ message: 'Users fetched' })
}

exports.users = async function (req, res, next) {
  const user = getUser()

  if (!user) {
    throw new AppError(BAD_REQUEST, 'User not found')
  }

  return res.status(OK).json({ success: true })
}

const schema = Joi.object({
  userId: Joi.number().required()
})

exports.create = async function (req, res, next) {
  const user = createUser()
  if (!user) {
    throw new AppError(BAD_REQUEST, 'Unable to create user.')
  }

  return res.status(OK).json({ success: true })
}

exports.login = async function (req, res, next) {
  const { error, value } = schema.validate({})

  if (error) {
    throw error
  }

  return res.status(OK).json({ success: true })
}
