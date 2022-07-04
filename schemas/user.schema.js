const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(250);

const createUserSchema = Joi.object({
  name: name.required(),
});

const updateUserSchema = Joi.object({
  name: name,
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
