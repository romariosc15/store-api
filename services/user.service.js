const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class UserService {

  constructor(){

  }
  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const data = await models.Category.findAll();
    return data;
  }

  async findOne(id) {
    const row = await models.User.findByPk(id);
    if(!row){
      throw boom.notFound('User not found.');
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

module.exports = UserService;
