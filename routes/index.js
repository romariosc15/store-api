const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const addressesRouter = require('./addresses.router');
//const orderRouter = require('./orders.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/address', addressesRouter);
  //router.use('/orders', orderRouter);
}

module.exports = routerApi;
