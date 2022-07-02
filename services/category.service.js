const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class CategoryService {

  constructor(){
    this.pool = pool;
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM categories';
    const response = await this.pool.query(query);
    return response.rows;
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

module.exports = CategoryService;