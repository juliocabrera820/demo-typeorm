import { celebrate, Segments, Joi } from 'celebrate'

export const validateUser = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().required().error(new Error('name is a required field')),
    email: Joi.string().trim().required().error(new Error('email is a required field'))
  })
})

export const validateId = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number().error(new Error('id must be a number'))
  })
})
