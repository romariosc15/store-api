const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CategoryService {

  constructor(){

  }
  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const data = await models.Category.findAll();
    return data;
  }

  async findOne(id) {
    const row = await models.Category.findByPk(id);
    if(!row){
      throw boom.notFound('Category not found.');
    };
    return row;
  }

  async update(id, changes) {
    const row = await this.findOne(id);
    const rowUpdated = await row.update(changes);
    return rowUpdated;
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
