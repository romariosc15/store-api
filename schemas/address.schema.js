const Joi = require('joi');

const id = Joi.number().integer();
const categoryId = Joi.number().integer();
const name = Joi.string().min(3).max(250);
const department = Joi.string();
const province = Joi.string();
const district = Joi.string();
const address = Joi.string();
const zipCode = Joi.number().integer();

const createCategorySchema = Joi.object({
  categoryId: categoryId.required(),
  name: name.required(),
  department: department.required(),
  province: province.required(),
  district: district.required(),
  address: address.required(),
  zipCode: zipCode.required(),
});

const updateCategorySchema = Joi.object({
  categoryId: categoryId,
  name: name,
  department: department,
  province: department,
  district: department,
  address: department,
  zipCode: zipCode
});

const getCategorySchema = Joi.object({
  id: id.required()
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
