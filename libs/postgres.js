const { Client } = require('pg');

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'romario.sarmiento',
    password: '123admin123',
    database: 'store'
  });

  await client.connect();
  return client;
};

module.exports = getConnection;

