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
    const row = await models.Product.findByPk(id);
    if(!row){
      throw boom.notFound('Product not found.');
    };
    return row;
  }

  async update(id, changes) {
    const row = await this.findOne(id);
    const rowUpdated = await row.update(changes);
    return rowUpdated;
  }

  async delete(id) {
    const row = await this.findOne(id);
    await row.destroy();
    return{ id };
  }

}

module.exports = ProductService;
