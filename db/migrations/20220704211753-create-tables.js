'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');
const { UserSchema, USER_TABLE } = require('./../models/user.model');
const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model');
const { AddressSchema, ADDRESS_TABLE } = require('./../models/address.model');
const { OrderSchema, ORDER_TABLE } = require('./../models/order.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(ADDRESS_TABLE, AddressSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(CATEGORY_TABLE);
    await queryInterface.drop(PRODUCT_TABLE);
    await queryInterface.drop(USER_TABLE);
    await queryInterface.drop(CUSTOMER_TABLE);
    await queryInterface.drop(ADDRESS_TABLE);
    await queryInterface.drop(ORDER_TABLE);
  }
};
