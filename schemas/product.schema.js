const Joi = require('joi');

const id = Joi.number().integer();
const categoryId = Joi.number().integer();
const name = Joi.string().min(3).max(250);
const image = Joi.string().uri();
const description = Joi.string();
const price = Joi.number();

const createProductSchema = Joi.object({
  categoryId: categoryId.required(),
  name: name.required(),
  image: image.required(),
  description: description.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  categoryId: categoryId,
  name: name,
  image: image,
  description: description,
  price: price,
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
