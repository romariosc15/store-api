const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductService {

  constructor(){

  }
  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const data = await models.Product.findAll();
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = ProductService;
