import { celebrate, Segments, Joi } from 'celebrate'

export const validateUser = celebrate({
  [Segments.BODY]: Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().required()
  })
})

export const validateId = celebrate({
  [Segments.PARAMS]: Joi.object({
    id: Joi.number()
  })
})
