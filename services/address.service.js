const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class AddressService {

  constructor(){

  }
  async create(data) {
    const newAddress = await models.Address.create(data);
    return newAddress;
  }

  async find() {
    const data = await models.Address.findAll();
    return data;
  }

  async findOne(id) {
    const row = await models.Address.findByPk(id, {
      include: ['customer']
    });
    if(!row){
      throw boom.notFound('Address not found.');
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

module.exports = AddressService;
