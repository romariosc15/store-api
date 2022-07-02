const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'romario.sarmiento',
  password: '123admin123',
  database: 'store'
});

module.exports = pool;
